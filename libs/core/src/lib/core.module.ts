import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app/app.component';
import {RouterOutlet} from '@angular/router';

@NgModule({
    declarations: [AppComponent],
    exports: [AppComponent],
    imports: [
        CommonModule,
        RouterOutlet
    ]
})
export class CoreModule {
}
