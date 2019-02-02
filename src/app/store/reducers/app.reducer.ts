import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import * as fromAuth from 'app/store/reducers/auth.reducer';
import * as fromUser from 'app/store/reducers/user.reducer';
import {environment} from 'environments/environment';

export interface State {
    auth: fromAuth.AuthState;
    user: fromUser.UserState;
}

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.authReducer,
    user: fromUser.userReducer
};

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);
export const metaReducers: MetaReducer<State>[] = !environment.production  ? [] : [];
