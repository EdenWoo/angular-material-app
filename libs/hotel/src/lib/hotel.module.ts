import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelComponent} from './hotel/hotel.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyModule} from '@ngx-formly/core';
import {HotelRoutingModule} from './hotel-routing.module';
import {HotelSearchFormComponent} from './hotel-search-form/hotel-search-form.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

@NgModule({
    declarations: [
        HotelComponent,
        HotelSearchFormComponent,
        HotelListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormlyMaterialModule,
        FormlyModule,
        HotelRoutingModule
    ]
})
export class HotelModule {
}
