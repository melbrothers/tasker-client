import { Action } from '@ngrx/store';
import {IUser} from '../models/user';

export enum UserActionTypes {
  GetCurrentUser = '[User] Get Current User'
}

export class GetCurrentUser implements Action {
  readonly type = UserActionTypes.SetLoginStatus;
  constructor(public payload: {user: IUser}) { }
}

export type UserActions = GetCurrentUser;
