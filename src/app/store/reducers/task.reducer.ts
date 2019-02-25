import {createFeatureSelector} from '@ngrx/store';

import {LoadTasks, TaskActions, TaskActionTypes} from '../actions/task.actions';
import {Task} from 'app/store/models/task.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface TaskState extends EntityState<Task> {
  selectedTask: Task;
  tasks: Task[];
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: TaskState = adapter.getInitialState({
  tasks: [],
  selectedTask: null
});

export function taskReducer(state = initialState, action: TaskActions ): TaskState {
    switch (action.type) {
      case TaskActionTypes.LOAD_TASKS:
        return adapter.addAll(action.payload.tasks, state);
      case TaskActionTypes.FILTER_TASK:
        return {
          ...state,
         tasks: action.payload.tasks,
        };
      case TaskActionTypes.SELECT_TASK:
        return adapter.addOne(action.payload.task, state);
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
export const getTasks = (state: TaskState): Task[] => state.tasks;




