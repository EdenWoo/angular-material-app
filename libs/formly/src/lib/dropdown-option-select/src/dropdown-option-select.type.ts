import {ChangeDetectionStrategy, Component, OnInit, Type} from '@angular/core';
import {FieldTypeConfig, FormlyFieldConfig} from '@ngx-formly/core';
import {FieldType, FormlyFieldProps} from '@ngx-formly/material/form-field';
import {FormlyFieldSelectProps} from '@ngx-formly/core/select';

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
    panelClassName: ''
    icon: ''
    optionList: any[]
}

export interface FormlySelectFieldConfig extends FormlyFieldConfig<SelectProps> {
    type: 'select' | Type<FormlyFieldSelect>;
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'formly-field-mat-select',
    template: `
        <button
                color="{{ totalCheckedCount > 0 ? 'primary' : '' }}"
                mat-raised-button
                class="menuTrigger"
                #menuTrigger="matMenuTrigger"
                [matMenuTriggerFor]="menu"
        >
            <div class="flex">
                <div class="flex mr-1">
                    <mat-icon class="m-auto">{{props.icon ? props.icon : 'filter_alt'}}</mat-icon>
                </div>
                <div class="flex">
                    <div class="m-auto">
                        {{summaryLabel || props.label}}
                    </div>
                </div>
                <div class="flex">
                    <mat-icon class="m-auto">{{ menu.closed ? "arrow_drop_down" : "arrow_drop_up" }}</mat-icon>
                </div>
            </div>
        </button>

        <mat-menu #menu="matMenu" class="{{props.panelClassName || 'w-64'}}">
            <div class="flex flex-col">
                <div class="m-4 text-lg font-semibold">{{props.label}}</div>

                <mat-selection-list #dropdownList [(ngModel)]="selected">
                    <mat-list-option (click)="$event.stopPropagation(); $event.preventDefault(); clickOption(option)"
                                     *ngFor="let option of props.optionList" checkboxPosition="before"
                                     [value]="option.value"
                                     [selected]="selectedSet.get(option.value)">
                        {{option.label}}
                    </mat-list-option>
                </mat-selection-list>

                <div class="flex justify-end mx-4">
                    <button [disabled]="selectedSet.size === 0" (click)="onResetClicked($event)" mat-button>Clear
                    </button>
                </div>
            </div>

        </mat-menu>

    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FormlyFieldSelect extends FieldType<FieldTypeConfig<SelectProps>> implements OnInit {
    selected = null;
    totalCheckedCount = 0
    summaryLabel = '';
    selectedSet = new Map()

    clickOption(option: any) {
        this.selectedSet.set(option.value, !this.selectedSet.get(option.value));
        this.formControl.setValue(this.selected);
        this.updateLabel()
    }

    ngOnInit() {
        const initValue = this.formControl.value;
        if (initValue && initValue.length > 0) {
            initValue.map((value: any) => {
                this.selectedSet.set(value, true);
            })
        }
        this.updateLabel();
    }

    updateLabel() {
        const checkedOptions = Array.from(this.selectedSet, ([option, selected]) => ({
            option,
            selected
        })).filter((item) => !!item.selected)
        this.totalCheckedCount = checkedOptions.length;
        if (this.totalCheckedCount === 1) {
            this.summaryLabel = checkedOptions[0].option;
        } else if (this.totalCheckedCount > 1 && this.totalCheckedCount < this.props?.optionList.length) {
            this.summaryLabel = (checkedOptions[0].option + ' ' + '+ ' + (this.totalCheckedCount - 1));
        } else if (this.totalCheckedCount > 1 && this.totalCheckedCount === this.props?.optionList.length) {
            this.summaryLabel = ('All ' + this.props.label);
        }
    }

    onResetClicked($event: MouseEvent) {
        $event.stopPropagation();
        this.formControl.setValue([]);
        this.selectedSet.clear();
        this.updateLabel();
    }
}
