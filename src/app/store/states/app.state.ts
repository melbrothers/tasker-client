import {UserState} from 'app/store/reducers/user.reducer';
import {AuthState} from '../reducers/auth.reducer';
import {TaskState} from '../reducers/task.reducer';

export interface State {
  user: UserState;
  auth: AuthState;
  task: TaskState;
}
