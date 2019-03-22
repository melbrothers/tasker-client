import {ActionReducerMap, createSelector, MetaReducer} from '@ngrx/store';
import * as fromAuth from 'app/store/reducers/auth.reducer';
import * as fromLoading from 'app/store/reducers/loading.reducer';
import * as fromUser from 'app/store/reducers/user.reducer';
import * as fromTask from 'app/store/reducers/task.reducer';
import * as fromLogin from 'app/store/reducers/login.reducer';
import {environment} from 'environments/environment';
import {storeFreeze} from 'ngrx-store-freeze';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from '../../core/utils/utils';
import {getLoginFeatureState} from 'app/store/reducers/login.reducer';

export interface State {
  loading: fromLoading.LoadingState;
  user: fromUser.UserState;
  auth: fromAuth.AuthState;
  tasks: fromTask.TaskState;
  login: fromLogin.LoginState;
  router: RouterReducerState<RouterStateUrl>;
}


export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  loading: fromLoading.loadingReducer,
  user: fromUser.userReducer,
  auth: fromAuth.authReducer,
  login: fromLogin.loginReducer,
  tasks: fromTask.taskReducer,
};

export const getAuthState = fromAuth.getAuthFeatureState;
export const getUserState = fromUser.getUserFeatureState;
export const getTaskState = fromTask.getTasksFeatureState;
export const getTasks = createSelector(getTaskState, fromTask.getTasks);
export const getLoadingState = fromLoading.getLoadingFeatureState;
export const getLoadingStatus = createSelector(getLoadingState, fromLoading.getLoadingStatus);
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);
export const getLoginState = fromLogin.getLoginFeatureState;
export const getIsLoginModalOpen = createSelector(getLoginState, fromLogin.getIsLoginModalOpened);
export const metaReducers: MetaReducer<State>[] = !environment.production  ? [storeFreeze] : [];

