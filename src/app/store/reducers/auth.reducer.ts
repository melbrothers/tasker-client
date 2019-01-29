import {Action, ActionReducer, ActionReducerMap} from '@ngrx/store';

import * as Auth from '../actions/auth.actions';
import { IUser } from 'app/store/models/user';
import {AuthActions, AuthActionTypes} from '../actions/auth.actions';

export interface AuthState {
    isAuthenticated?: boolean;
    user: IUser;
}

export function authReducer(state: AuthState, action: AuthActions ): AuthState {
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
                user: null
            };
        }
        default: {
            return state;
        }
    }
}

export const getIsAuthenticated = (state: AuthState): boolean => state.isAuthenticated;


