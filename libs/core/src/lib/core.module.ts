import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app/app.component';
import {RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    declarations: [AppComponent],
    exports: [AppComponent],
    imports: [
        CommonModule,
        RouterOutlet,
        MatButtonModule,
        MatTooltipModule
    ]
})
export class CoreModule {
}
