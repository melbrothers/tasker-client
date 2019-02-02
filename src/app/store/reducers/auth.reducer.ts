import {Action, ActionReducer, ActionReducerMap} from '@ngrx/store';

import * as Auth from '../actions/auth.actions';
import { IUser } from 'app/store/models/user';
import {AuthActions, AuthActionTypes} from '../actions/auth.actions';

export interface AuthState {
    isAuthenticated?: boolean;
    user?: IUser;
}

const initialState: AuthState = {
    isAuthenticated: false,
};

export function authReducer(state = initialState, action: Auth.AuthActions ): AuthState {
    switch (action.type) {
        case AuthActionTypes.SET_AUTHENTICATED: {
            return {
                ...state,
                isAuthenticated: true,
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


