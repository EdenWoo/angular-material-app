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
        <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
            <mat-button-toggle class="w-32 h-14 flex justify-center" value="hotel">Hotel</mat-button-toggle>
            <mat-button-toggle class="w-32 h-14 flex justify-center" value="hotelRentals">Hotel Rentals</mat-button-toggle>
        </mat-button-toggle-group>
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
