import {LoadingActions, LoadingActionTypes} from '../actions/loading.actions';
import {createFeatureSelector} from '@ngrx/store';


export interface LoadingState {
  isLoading: boolean;
}

export const initialState: LoadingState = {
  isLoading: true,
};

export function loadingReducer(state = initialState, action: LoadingActions): LoadingState {
  switch (action.type) {
    case LoadingActionTypes.SHOW_LOADING: {
      return {
        isLoading: true
      };
    }
    case LoadingActionTypes.HIDE_LOADING: {
      return {
        isLoading: false
      };
    }
    default:
      return state;
  }
}
export const getLoadingFeatureState = createFeatureSelector<LoadingState>('loading');
export const getLoadingStatus = (state: LoadingState): boolean => state.isLoading;
