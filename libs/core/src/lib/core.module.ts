import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app/app.component';
import {RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {StoreModule} from '@ngrx/store';
import {appFeatureName, appReducer, metaReducers, reducers} from './store';
import {AppFacade} from './store/app.facade';
import {extModules} from './build-specifics';

@NgModule({
    declarations: [AppComponent],
    exports: [AppComponent],
    imports: [
        CommonModule,
        RouterOutlet,
        MatButtonModule,
        MatTooltipModule,
        // ngrx
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false,
            },
        }),
        StoreModule.forFeature(appFeatureName, appReducer),
        // Instrumentation must be imported after importing StoreModule
        extModules,
    ],
    providers: [AppFacade],
})
export class CoreModule {
}
