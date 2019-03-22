import {createFeatureSelector} from '@ngrx/store';
import {LoginActions, LoginActionTypes} from '../actions/login.actions';

export interface LoginState {
  isLoginModalOpen: boolean;
}

const initialState: LoginState = {
  isLoginModalOpen: false
};

export function loginReducer(state = initialState, action: LoginActions ): LoginState {
  switch (action.type) {
    case LoginActionTypes.LAUNCH_LOGIN: {
      return {
        isLoginModalOpen: true,
      };
    }
    default: {
      return state;
    }
  }
}

export const getLoginFeatureState = createFeatureSelector<LoginState>('login');

export const getIsLoginModalOpened = (state: LoginState): boolean => state.isLoginModalOpen;

