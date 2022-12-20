import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent, CoreModule} from '@angular-material-app/core';

@NgModule({
    declarations: [],
    imports: [BrowserModule, BrowserAnimationsModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
