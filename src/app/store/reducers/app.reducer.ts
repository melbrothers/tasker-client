import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import * as fromAuth from 'app/store/reducers/auth.reducer';
import * as fromUser from 'app/store/reducers/user.reducer';
import * as fromTask from 'app/store/reducers/task.reducer';
import {environment} from 'environments/environment';

export interface State {
    auth: fromAuth.AuthState;
    tasks: fromTask.TaskState;
}

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.authReducer,
    tasks: fromTask.taskReducer,
};

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);
export const metaReducers: MetaReducer<State>[] = !environment.production  ? [] : [];
