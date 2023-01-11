import { Action, createAction, props } from '@ngrx/store';
import { SidebarStatus } from './core.state';

export enum AppActionTypes {
  SetSidebarMode = '[App] Set Sidebar Mode',
  AppRoutingChange = '[App] AppRouting',
}

export class SetSidebarMode implements Action {
  readonly type = AppActionTypes.SetSidebarMode;

  constructor(public payload: SidebarStatus) {}
}

export class AppRoutingChange implements Action {
  readonly type = AppActionTypes.AppRoutingChange;

  constructor(public payload: boolean) {}
}

export const AppRouting = createAction('[router] APP ROUTING', props<{ routing: boolean }>());

export type AppActions = SetSidebarMode | AppRoutingChange;
