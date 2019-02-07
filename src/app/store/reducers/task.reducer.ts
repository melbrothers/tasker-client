import {createFeatureSelector} from '@ngrx/store';

import {TaskActions, TaskActionTypes} from '../actions/task.actions';
import { Task } from 'app/store/models/task.model';

export interface TaskState {
    tasks: Task[];
    selectedTask: Task;
}

const initialState: TaskState = {
    tasks: [],
    selectedTask: null,
};

export function taskReducer(state = initialState, action: TaskActions ): TaskState {
    switch (action.type) {
        case TaskActionTypes.FETCH_TASKS:
            const tasks = [...state.tasks, ...action.payload.tasks];
            return {...state, tasks: tasks};
        case TaskActionTypes.SELECT_TASK:
            return  {
                ...state,
                selectedTask: action.payload.task
            };
        default: {
            return state;
        }
    }
}

export const getTasksState = createFeatureSelector<TaskState>('tasks');



