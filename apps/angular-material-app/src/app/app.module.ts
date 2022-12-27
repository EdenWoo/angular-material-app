import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent, CoreModule} from '@angular-material-app/core';
import {AppRoutingModule} from './app-routing.module';
import {FormlyModule} from '@ngx-formly/core';
import {AmaFormlyModule, FORMLY_CONFIG} from '@angular-material-app/formly';

@NgModule({
    declarations: [],
    imports: [BrowserModule, BrowserAnimationsModule, CoreModule, AppRoutingModule, FormlyModule.forRoot(FORMLY_CONFIG), AmaFormlyModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
