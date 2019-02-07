import {Action, ActionReducer, ActionReducerMap} from '@ngrx/store';

import * as Auth from '../actions/auth.actions';
import {AuthActions, AuthActionTypes} from '../actions/auth.actions';
import { User } from 'app/store/models/user.model';

export interface AuthState {
    isAuthenticated?: boolean;
    user?: User;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export function authReducer(state = initialState, action: Auth.AuthActions ): AuthState {
    switch (action.type) {
        case AuthActionTypes.SET_AUTHENTICATED: {
            return {
                isAuthenticated: true,
                user: action.payload.user
            };
        }
        case Auth.AuthActionTypes.SET_UNAUTHENTICATED: {
            return {
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
export const getUser = (state: AuthState): User => state.user;


