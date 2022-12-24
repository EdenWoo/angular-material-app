import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        FormlyMaterialModule,
        FormlyModule,
        MatButtonModule,
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
