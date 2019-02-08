import { Action } from '@ngrx/store';

export enum LoadingActionTypes {
  SHOW_LOADING = '[Loading] SHOW_LOADING',
  HIDE_LOADING = '[Loading] HIDE_LOADING',
}

export class ShowLoading implements Action {
  readonly type = LoadingActionTypes.SHOW_LOADING;
  constructor () {}
}

export class HideLoading implements Action {
  readonly type = LoadingActionTypes.HIDE_LOADING;
  constructor () {}
}

export type LoadingActions = ShowLoading | HideLoading;
