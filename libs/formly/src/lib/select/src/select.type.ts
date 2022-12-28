import {ChangeDetectionStrategy, Component, OnInit, Type} from '@angular/core';
import {FieldTypeConfig, FormlyFieldConfig} from '@ngx-formly/core';
import {FieldType, FormlyFieldProps} from '@ngx-formly/material/form-field';
import {FormlyFieldSelectProps} from '@ngx-formly/core/select';

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
    multiple?: boolean;
    selectAllOption?: string;
    disableOptionCentering?: boolean;
    typeaheadDebounceInterval?: number;
    compareWith?: (o1: any, o2: any) => boolean;

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
                    <mat-icon class="m-auto">filter_alt</mat-icon>
                </div>
                <span class="font-normal">label</span>
                <div class="flex">
                    <mat-icon class="m-auto">{{ menu.closed ? "arrow_drop_down" : "arrow_drop_up" }}</mat-icon>
                </div>
            </div>
        </button>

        <mat-menu #menu="matMenu" class="w-64">
            <mat-selection-list #dropdownList (selectionChange)="selectionChange($event)" [(ngModel)]="selected">
                <mat-list-option (click)="$event.stopPropagation(); $event.preventDefault()"
                                 *ngFor="let option of props.optionList" checkboxPosition="before"
                                 [value]="option.value"
                                 [selected]="selectedSet.get(option.value)">
                    {{option.label}}
                </mat-list-option>
            </mat-selection-list>
        </mat-menu>

    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class FormlyFieldSelect extends FieldType<FieldTypeConfig<SelectProps>> implements OnInit {
    selected = null;
    totalCheckedCount = 0

    selectedSet = new Map()

    selectionChange($event: any) {
        this.selectedSet.set($event.value, !this.selectedSet.get($event.value));
        this.formControl.setValue(this.selected)
    }

    ngOnInit() {
        console.log(this.model)
        console.log(this.formControl.value)
        const initValue = this.formControl.value;
        if (initValue && initValue.length > 0) {
            initValue.map((value: any) => {
                this.selectedSet.set(value, true);
            })
        }
        console.log(this.selectedSet)
    }
}
