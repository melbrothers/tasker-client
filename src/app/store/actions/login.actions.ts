import {Action} from '@ngrx/store';
import {AuthActionTypes} from './auth.actions';

export enum LoginActionTypes {
  LAUNCH_LOGIN = '[Login] LAUNCH_LOGIN',
}
export class LaunchLogin implements Action {
  readonly type = LoginActionTypes.LAUNCH_LOGIN;
}
export type LoginActions = LaunchLogin;
