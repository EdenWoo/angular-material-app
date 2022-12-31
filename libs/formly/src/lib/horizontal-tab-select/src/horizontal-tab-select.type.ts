import {ChangeDetectionStrategy, Component, OnInit, Type} from '@angular/core';
import {FieldTypeConfig, FormlyFieldConfig} from '@ngx-formly/core';
import {FieldType, FormlyFieldProps} from '@ngx-formly/material/form-field';
import {FormlyFieldSelectProps} from '@ngx-formly/core/select';

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
    panelClassName: ''
    optionList: any[]
}

export interface HorizontalTabSelectFieldConfig extends FormlyFieldConfig<SelectProps> {
    type: 'select' | Type<HorizontalTabSelect>;
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'horizontal-tab-select',
    template: `
        <div class="flex divide-x divide-solid divide-light-border dark:divide-dark-border h-14 justify-center border border-light-border border-solid rounded dark:border-dark-border cursor-pointer">
            <div class="w-32 flex justify-center" matRipple>
                <div class="m-auto flex justify-between gap-2">
                    <mat-icon class="mat-18">hotel</mat-icon>
                    <div class="flex">
                        <div class="m-auto">Hotels</div>
                    </div>
                </div>
            </div>
            <div class="w-32 flex justify-center bg-primary" matRipple>
                <div class="m-auto">
                    Hotel Rentals
                </div>
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class HorizontalTabSelect extends FieldType<FieldTypeConfig<SelectProps>> implements OnInit {
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
