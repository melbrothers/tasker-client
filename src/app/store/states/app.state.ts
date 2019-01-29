import {UserState} from 'app/store/reducers/user.reducer';
import {AuthState} from '../reducers/auth.reducer';

export interface State {
  user: UserState;
  auth: AuthState;
}
