import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';
import { IUser } from 'app/store/models/user';


// State for this feature (User)
export interface UserState {
  currentUser: IUser;
}

const initialState: UserState = {
  currentUser: null
};

export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.GetCurrentUser:
      return {
        ...state,
      };

    default:
      return state;
  }
}

// Selector functions
export const getUserFeatureState = createFeatureSelector<UserState>('users');
