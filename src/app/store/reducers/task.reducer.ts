import {Action, ActionReducer, ActionReducerMap} from '@ngrx/store';

import * as Task from '../actions/task.actions';
import { IUser } from 'app/store/models/user';
import {AuthActions, AuthActionTypes} from '../actions/auth.actions';
import {SocialUser} from 'angularx-social-login';

export interface TaskState {
    isAuthenticated?: boolean;
    user?: IUser;
    guser?: SocialUser;
}

const initialState: TaskState = {
  isAuthenticated: false,
  user: undefined,
  guser: undefined
};

export function taskReducer(state = initialState, action: Task.FetchTasks ): TaskState {
    switch (action.type) {
        default: {
            return state;
        }
    }
}



