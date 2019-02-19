import {createFeatureSelector} from '@ngrx/store';

import {TaskActions, TaskActionTypes} from '../actions/task.actions';
import {Task} from 'app/store/models/task.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface TaskState extends EntityState<Task> {
  // taskEntities: {[key: number]: Task};
  // taskOrder: number[];
    // tasks: Task[];
    // selectedTask: Task;
  allTasksLoaded: boolean;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

// const initialState: TaskState = {
//     tasks: [],
//     selectedTask: null,
// };

export const initialState: TaskState = adapter.getInitialState({
  allTasksLoaded: false
});

export function taskReducer(state = initialState, action: TaskActions ): TaskState {
    switch (action.type) {
        case TaskActionTypes.LOAD_TASKS:
          return adapter.addAll(action.payload.tasks, state);
            // const tasks = [...state.tasks, ...action.payload.tasks];
            // return {
            //   ...state, tasks: tasks
            // };
        case TaskActionTypes.SELECT_TASK:
          return adapter.addOne(action.payload.task, state);
            // return  {
            //   ...state,
            //   selectedTask: action.payload.task
            // };
      case TaskActionTypes.REQUEST_TASK:
            return {
              ...state,
            };
        default: {
            return state;
        }
    }
}

export const getTasksFeatureState = createFeatureSelector<TaskState>('tasks');



