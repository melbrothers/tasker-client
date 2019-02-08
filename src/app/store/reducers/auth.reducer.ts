import {AuthActions, AuthActionTypes} from '../actions/auth.actions';
import { User } from 'app/store/models/user.model';
import {createFeatureSelector} from '@ngrx/store';

export interface AuthState {
    isAuthenticated: boolean;
    user: User;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export function authReducer(state = initialState, action: AuthActions ): AuthState {
    switch (action.type) {
        case AuthActionTypes.SET_AUTHENTICATED: {
            return {
                isAuthenticated: true,
                user: action.payload.user
            };
        }
        case AuthActionTypes.SET_UNAUTHENTICATED: {
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

export const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getIsAuthenticated = (state: AuthState): boolean => state.isAuthenticated;



