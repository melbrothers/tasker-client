import {Action, ActionReducer, ActionReducerMap} from '@ngrx/store';

import * as Auth from '../actions/auth.actions';
import { IUser } from 'app/store/models/user';
import {AuthActions, AuthActionTypes} from '../actions/auth.actions';
import {SocialUser} from 'angularx-social-login';

export interface AuthState {
    isAuthenticated?: boolean;
    user?: IUser;
    guser?: SocialUser;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
  guser: undefined
};

export function authReducer(state = initialState, action: Auth.AuthActions ): AuthState {
    switch (action.type) {
        case AuthActionTypes.SET_AUTHENTICATED: {
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user
            };
        }
        case Auth.AuthActionTypes.SET_UNAUTHENTICATED: {
            return {
                ...state,
                isAuthenticated: false,
                user: undefined
            };
        }
      case Auth.AuthActionTypes.SET_GOOGLEUSER: {
        return {
          ...state,
          isAuthenticated: true,
          guser: action.payload.user
        };
      }
        default: {
            return state;
        }
    }
}

export const getIsAuthenticated = (state: AuthState): boolean => state.isAuthenticated;
export const getUser = (state: AuthState): IUser => state.user;
export const getGoogleUser = (state: AuthState): SocialUser => state.guser;


