import { User } from '../user';

/* NgRx */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';


// State for this feature (User)
export interface UserState {
  isLoggedIn: boolean;
  currentUser: User;
}

const initialState: UserState = {
  isLoggedIn: false,
  currentUser: null
};

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getLoginStatus = createSelector(
  getUserFeatureState,
  (state: UserState) => state.isLoggedIn
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  (state: UserState) => state.currentUser
);

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.SetLoginStatus:
      return {
        ...state,
        isLoggedIn: action.payload
      };

    default:
      return state;
  }
}
