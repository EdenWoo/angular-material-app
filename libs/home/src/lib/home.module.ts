import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        FormlyMaterialModule,
        FormlyModule,
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
