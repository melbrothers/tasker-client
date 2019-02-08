import { Action } from '@ngrx/store';
import {User} from '../models/user.model';

export enum UserActionTypes {
  GetUsers = '[User] Get Users'
}

export class GetUsers implements Action {
  readonly type = UserActionTypes.GetUsers;
  constructor(public payload: {users: User}) { }
}

export type UserActions = GetUsers;
