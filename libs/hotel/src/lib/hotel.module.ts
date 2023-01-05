import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelComponent} from './hotel/hotel.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {FormlyModule} from '@ngx-formly/core';
import {HotelRoutingModule} from './hotel-routing.module';
import {HotelSearchFormComponent} from './hotel-search-form/hotel-search-form.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

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
        HotelRoutingModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class HotelModule {
}
