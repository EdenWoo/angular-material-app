import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlySelectModule} from '@ngx-formly/core/select';

import {FormlyMatFormFieldModule} from '@ngx-formly/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {FormlyFieldSelect} from './select.type';
import {MatPseudoCheckboxModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
    declarations: [FormlyFieldSelect],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatPseudoCheckboxModule,

        FormlyMatFormFieldModule,
        FormlySelectModule,
        FormlyModule.forChild({
            types: [
                {
                    name: 'ama-select',
                    component: FormlyFieldSelect,
                },
            ],
        }),
        MatMenuModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        MatListModule,
        FormsModule,
    ],
})
export class FormlyMatSelectModule {
}
