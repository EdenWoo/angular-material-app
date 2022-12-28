import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyWrapperAddons} from './addons.wrapper';
import {MatIconModule} from '@angular/material/icon';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuSelectModule} from './menu-select/src/menu-select.module';
import {DropdownOptionSelectModule} from './dropdown-option-select/src/dropdown-option-select.module';

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
        MenuSelectModule,
        DropdownOptionSelectModule
    ]
})
export class AmaFormlyModule {
}
