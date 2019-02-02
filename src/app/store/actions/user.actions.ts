import { Action } from '@ngrx/store';
import {IUser} from '../models/user';

export enum UserActionTypes {
  SetLoginStatus = '[User] Login Status'
}

export class SetLoginStatus implements Action {
  readonly type = UserActionTypes.SetLoginStatus;
  constructor(public payload: {isLoggedIn: boolean, user: IUser}) { }
}

export type UserActions = SetLoginStatus;
