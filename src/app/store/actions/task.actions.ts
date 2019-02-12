import { Action } from '@ngrx/store';
import { Task } from 'app/store/models/task.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum TaskActionTypes {
    LOAD_TASKS = '[Load Tasks] from API',
    REQUEST_TASK = '[Request Task Detail] from Store',
    SELECT_TASK = '[View Task Detail] Select a task',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadTasks implements Action {
    readonly type = TaskActionTypes.LOAD_TASKS;
    constructor (public payload: {tasks: Task[]}) {}
}

export class SelectTask implements Action {
    readonly type = TaskActionTypes.SELECT_TASK;
    constructor (public payload: {task: Task}) {}
}

export class RequestTask implements Action {
  readonly type = TaskActionTypes.REQUEST_TASK;
  constructor(public payload: {taskId: number}) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TaskActions = LoadTasks | SelectTask | RequestTask;
