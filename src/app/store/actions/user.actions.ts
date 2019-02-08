import { Action } from '@ngrx/store';
import {IUser} from '../models/user';

export enum UserActionTypes {
  GetUsers = '[User] Get Users'
}

export class GetUsers implements Action {
  readonly type = UserActionTypes.SetLoginStatus;
  constructor(public payload: {users: User}) { }
}

export type UserActions = GetUsers;
