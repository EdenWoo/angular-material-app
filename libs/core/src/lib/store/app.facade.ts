import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {appRouting, AppState, selectSidebarStatus} from './core.state';

@Injectable({providedIn: 'root'})
export class AppFacade {
    sidebarStatus$ = this.store.select(selectSidebarStatus);
    appRouting$ = this.store.select(appRouting);

    constructor(private store: Store<AppState>) {
    }

}
