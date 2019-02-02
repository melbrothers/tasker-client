import { Action } from '@ngrx/store';
import {IUser} from '../models/user';
import {SocialUser} from 'angularx-social-login';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AuthActionTypes {
    SET_AUTHENTICATED = '[Auth] SET_AUTHENTICATED',
    SET_UNAUTHENTICATED = '[Auth] SET_UNAUTHENTICATED',
    SET_GOOGLEUSER = '[Auth] SET_GOOGLEUSER'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class SetAuthenticated implements Action {
    readonly type = AuthActionTypes.SET_AUTHENTICATED;
    constructor () {}
}

export class SetGoogleUser implements Action {
  readonly type = AuthActionTypes.SET_GOOGLEUSER;
  constructor(public payload: {user: SocialUser}) {}
}

export class SetUnauthenticated implements Action {
    readonly type = AuthActionTypes.SET_UNAUTHENTICATED;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type AuthActions = SetAuthenticated | SetUnauthenticated | SetGoogleUser;
