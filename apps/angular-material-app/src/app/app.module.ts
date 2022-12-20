import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent, CoreModule} from '@angular-material-app/core';
import {AppRoutingModule} from './app-routing.module';
import {FormlyModule} from '@ngx-formly/core';

@NgModule({
    declarations: [],
    imports: [BrowserModule, BrowserAnimationsModule, CoreModule, AppRoutingModule, FormlyModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
