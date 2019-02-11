import {ActionReducerMap, createSelector, MetaReducer} from '@ngrx/store';
import * as fromAuth from 'app/store/reducers/auth.reducer';
import * as fromLoading from 'app/store/reducers/loading.reducer';
import * as fromUser from 'app/store/reducers/user.reducer';
import * as fromTask from 'app/store/reducers/task.reducer';
import {environment} from 'environments/environment';

export interface State {
  loading: fromLoading.LoadingState;
  user: fromUser.UserState;
  auth: fromAuth.AuthState;
  tasks: fromTask.TaskState;
}


export const reducers: ActionReducerMap<State> = {
  loading: fromLoading.loadingReducer,
  user: fromUser.userReducer,
  auth: fromAuth.authReducer,
  tasks: fromTask.taskReducer,
};

export const getAuthState = fromAuth.getAuthFeatureState;
export const getUserState = fromUser.getUserFeatureState;
export const getTaskState = fromTask.getTasksFeatureState;
export const getLoadingState = fromLoading.getLoadingFeatureState;
export const getLoadingStatus = createSelector(getLoadingState, fromLoading.getLoadingStatus);
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);
export const metaReducers: MetaReducer<State>[] = !environment.production  ? [] : [];
