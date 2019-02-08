import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';
import { User } from 'app/store/models/user.model';


// State for this feature (User)
export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: []
};

// Selector functions
export const getUserFeatureState = createFeatureSelector<UserState>('users');

// export const getCurrentUser = createSelector(
//   getUserFeatureState,
//   (state: UserState) => state.currentUser
// );

// export function userReducer(state = initialState, action: UserActions): UserState {
//   switch (action.type) {
//     case UserActionTypes.SetLoginStatus:
//       return {

//       };

//     default:
//       return state;
//   }
// }
