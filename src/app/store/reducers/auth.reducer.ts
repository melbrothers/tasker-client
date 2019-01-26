import { Action } from '@ngrx/store';

import * as Auth from '../actions/auth.actions';
import { IUser } from 'app/store/models/user';

export interface State {
    isAuthenticated?: boolean;
}

const initialState: State = {
    isAuthenticated: false,
};

export function reducer(state = initialState, action: Auth.AuthActions ): State {
    switch (action.type) {
        case Auth.AuthActionTypes.SET_AUTHENTICATED: {
            return {
                ...state,
                isAuthenticated: true
            };
        }
        case Auth.AuthActionTypes.SET_UNAUTHENTICATED: {
            return {
                ...state,
                isAuthenticated: false
            };
        }
        default: {
            return state;
        }
    }
}

export const getIsAuthenticated = (state: State): boolean => state.isAuthenticated;
