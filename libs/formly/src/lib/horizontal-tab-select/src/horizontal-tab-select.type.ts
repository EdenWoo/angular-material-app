import {ChangeDetectionStrategy, Component, Type} from '@angular/core';
import {FieldTypeConfig, FormlyFieldConfig} from '@ngx-formly/core';
import {FieldType, FormlyFieldProps} from '@ngx-formly/material/form-field';
import {FormlyFieldSelectProps} from '@ngx-formly/core/select';

interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {
    panelClassName: ''
    optionList: any[]
}

export interface HorizontalTabSelectFieldConfig extends FormlyFieldConfig<SelectProps> {
    type: 'select' | Type<HorizontalTabSelectComponent>;
}

@Component({
    selector: 'ama-horizontal-tab-select',
    template: `
        <div class="flex h-14 justify-center cursor-pointer">
            <ng-container *ngFor="let item of (props.optionList || []); let i = index">
                <div *ngIf="i === 0"
                     (click)="selectItem(item)"
                     class="{{selected?.value === item.value ? 'bg-primary border-primary' : 'border-light-border dark:border-dark-border'}} w-40 flex justify-center border-l border-t border-b border-solid rounded-l"
                     matRipple>
                    <div class="m-auto flex justify-between gap-2">
                        <mat-icon class="mat-18">{{item.icon}}</mat-icon>
                        <div class="flex">
                            <div class="m-auto">{{item.label}}</div>
                        </div>
                    </div>
                </div>
                <div (click)="selectItem(item)" *ngIf="i !== (props.optionList || []).length -1 && i !== 0"
                     class="{{selected?.value === item.value ? 'bg-primary border-primary' : 'border-light-border dark:border-dark-border'}} w-40 flex justify-center border-l border-t border-b border-solid"
                     matRipple>
                    <div class="m-auto flex justify-between gap-2">
                        <mat-icon class="mat-18">{{item.icon}}</mat-icon>
                        <div class="flex">
                            <div class="m-auto">{{item.label}}</div>
                        </div>
                    </div>
                </div>
                <div (click)="selectItem(item)" *ngIf="i === (props.optionList || []).length -1"
                     class="{{selected?.value === item.value ? 'bg-primary border-primary' : 'border-light-border dark:border-dark-border'}} w-40 flex justify-center border-l border-r border-t border-b border-solid rounded-r"
                     matRipple>
                    <div class="m-auto flex justify-between gap-2">
                        <mat-icon class="mat-18">{{item.icon}}</mat-icon>
                        <div class="flex">
                            <div class="m-auto">{{item.label}}</div>
                        </div>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalTabSelectComponent extends FieldType<FieldTypeConfig<SelectProps>> {
    selected: any = null;

    selectItem(item: any) {
        this.selected = item
        this.formControl.setValue(this.selected)
    }
}
