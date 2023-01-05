import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyWrapperAddons} from './addons.wrapper';
import {MatIconModule} from '@angular/material/icon';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownOptionSelectModule} from './dropdown-option-select';
import {FormlyMatDatepickerModule} from '@ngx-formly/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter} from '@angular/material/core';
import {HorizontalTabSelectModule} from './horizontal-tab-select';
import {AutocompleteInputModule} from './autocomplete-input';

export const DATE_FORMATS = {
    parse: {
        dateInput: 'dd/MM/yyyy',
    },
    display: {
        dateInput: 'customInput',
        monthYearLabel: 'MMM yyyy',
        dateA11yLabel: 'dd/MM/yyyy',
        monthYearA11yLabel: 'MMMM yyyy',
    },
};

@NgModule({
    declarations: [
        FormlyWrapperAddons
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormlyMaterialModule,
        MatIconModule,
        DropdownOptionSelectModule,
        FormlyMatDatepickerModule,
        HorizontalTabSelectModule,
        AutocompleteInputModule
    ],
    providers: [
        {provide: DateAdapter, useClass: NativeDateAdapter},
        {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS},
    ],
})
export class AmaFormlyModule {
}
