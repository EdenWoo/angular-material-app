import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { AppActions, AppActionTypes } from './app.actions';

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};

export function clearState(reducer: ActionReducer<State>): ActionReducer<State> | any{
  return function (state: State, action: Action): State {
    // if (action.type === '[auth] LOGOUT') {
    //   state = ;
    // }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [clearState];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

export enum SidebarStatus {
  Closed = 0,
  Mini = 1,
  Open = 2,
}

// Application Global State
export interface AppState extends State {
  sidebarStatus: SidebarStatus;
  appRouting: boolean;
}

export const initialAppState: AppState = { sidebarStatus: SidebarStatus.Open, appRouting: false };

export function appReducer(state = initialAppState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.SetSidebarMode:
      return {
        ...state,
        sidebarStatus: action.payload,
      };

    case AppActionTypes.AppRoutingChange:
      return {
        ...state,
        appRouting: action.payload,
      };

    default:
      return state;
  }
}

export const appFeatureName = 'app';

export const selectAppFeature = createFeatureSelector<AppState>(appFeatureName);

export const selectSidebarStatus = createSelector(selectAppFeature, (state) => state.sidebarStatus);
export const appRouting = createSelector(selectAppFeature, (state) => state.appRouting);
