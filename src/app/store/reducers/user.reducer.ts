import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';
import { IUser } from 'app/store/models/user';


// State for this feature (User)
export interface UserState {
  isLoggedIn: boolean;
  currentUser: IUser;
}

const initialState: UserState = {
  isLoggedIn: false,
  currentUser: null
};

// export const getLoginStatus = createSelector(
//   getUserFeatureState,
//   (state: UserState) => state.isLoggedIn
// );

// export const getCurrentUser = createSelector(
//   getUserFeatureState,
//   (state: UserState) => state.currentUser
// );

export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.SetLoginStatus:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn
      };

    default:
      return state;
  }
}

// Selector functions
export const getUserFeatureState = createFeatureSelector<UserState>('users');
