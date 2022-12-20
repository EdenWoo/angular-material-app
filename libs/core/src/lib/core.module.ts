import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app/app.component';
import {RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [AppComponent],
    exports: [AppComponent],
    imports: [
        CommonModule,
        RouterOutlet,
        MatButtonModule
    ]
})
export class CoreModule {
}
