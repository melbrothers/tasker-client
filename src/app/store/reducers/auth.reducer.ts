import { Action } from '@ngrx/store';

import * as Auth from '../actions/auth.actions';

export interface State {
    isAuthenticated: boolean;
}

const initialState: State = {
    isAuthenticated: false
};

export function reducer(state = initialState, action: Auth.AuthActions ): State {
    switch (action.type) {
        case Auth.AuthActionTypes.SET_AUTHENTICATED: {
            return {
                isAuthenticated: true
            };
        }
        case Auth.AuthActionTypes.SET_UNAUTHENTICATED: {
            return {
                isAuthenticated: false
            };
        }
        default: {
            return state;
        }
    }
}

export const getIsAuthenticated = (state: State) => state.isAuthenticated;
