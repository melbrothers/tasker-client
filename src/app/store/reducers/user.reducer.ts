import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';
import {User} from '../models/user.model';


// State for this feature (User)
export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: null
};

export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.GetUsers:
      return {
        ...state,
      };

    default:
      return state;
  }
}

// Selector functions
export const getUserFeatureState = createFeatureSelector<UserState>('users');
