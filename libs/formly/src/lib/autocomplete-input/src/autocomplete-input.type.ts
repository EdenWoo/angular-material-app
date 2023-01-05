import {ChangeDetectionStrategy, Component, OnInit, Type} from '@angular/core';
import {FieldTypeConfig, FormlyFieldConfig} from '@ngx-formly/core';
import {FieldType, FormlyFieldProps} from '@ngx-formly/material/form-field';
import {FormlyFieldSelectProps} from '@ngx-formly/core/select';

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
    panelClassName: ''
    icon: ''
    optionList: any[]
}

export interface AutoCompleteInputFieldConfig extends FormlyFieldConfig<SelectProps> {
    type: 'select' | Type<AutoCompleteInputComponent>;
}

@Component({
    selector: 'ama-autocomplete-input',
    template: `
        <input type="text"
               [placeholder]="props.placeholder || ''"
               aria-label="Number"
               matInput
               [formControl]="formControl"
               [matAutocomplete]="auto">
        <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
            <mat-option *ngFor="let option of props.optionList" [value]="option.value">
                <div class="flex gap-2">
                    <div class="flex">
                        <mat-icon class="m-auto">{{option.icon}}</mat-icon>
                    </div>
                    <div>{{option.label}}</div>
                </div>

            </mat-option>
        </mat-autocomplete>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCompleteInputComponent extends FieldType<FieldTypeConfig<SelectProps>> implements OnInit {
    selectedSet = new Map()

    ngOnInit() {
        const initValue = this.formControl.value;
        if (initValue && initValue.length > 0) {
            initValue.map((value: any) => {
                this.selectedSet.set(value, true);
            })
        }
    }

}
