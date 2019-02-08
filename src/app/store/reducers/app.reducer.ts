import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import * as fromAuth from 'app/store/reducers/auth.reducer';
import * as fromUser from 'app/store/reducers/user.reducer';
import * as fromTask from 'app/store/reducers/task.reducer';
import {environment} from 'environments/environment';
import {User} from '../models/user.model';
import {AuthState} from 'app/store/reducers/auth.reducer';

export interface State {
  user: fromUser.UserState;
  auth: fromAuth.AuthState;
  tasks: fromTask.TaskState;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.userReducer,
  auth: fromAuth.authReducer,
  tasks: fromTask.taskReducer,
};

export const getAuthState = fromAuth.getAuthFeatureState;
export const getUserState = fromUser.getUserFeatureState;
export const getTaskState = fromTask.getTasksFeatureState;
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);
export const metaReducers: MetaReducer<State>[] = !environment.production  ? [] : [];
