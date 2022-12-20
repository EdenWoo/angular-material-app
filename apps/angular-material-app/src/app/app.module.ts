import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent, CoreModule} from '@angular-material-app/core';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [],
    imports: [BrowserModule, BrowserAnimationsModule, CoreModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
