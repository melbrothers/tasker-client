/* NgRx */
import { Action } from '@ngrx/store';

export enum UserActionTypes {
  SetLoginStatus = '[User] Login Status'
}

export class SetLoginStatus implements Action {
  readonly type = UserActionTypes.SetLoginStatus;

  constructor(public payload: boolean) { }
}

export type UserActions = SetLoginStatus;
