import { Action } from '@ngrx/store';
import { Task } from 'app/store/models/task.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum TaskActionTypes {
    FETCH_TASKS = '[Task] FETCH_TASKS',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class FetchTasks implements Action {
    readonly type = TaskActionTypes.FETCH_TASKS;
    constructor (public payload: {tasks: Task[]}) {}
}

// export class SetUnauthenticated implements Action {
//     readonly type = AuthActionTypes.SET_UNAUTHENTICATED;
// }

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TaskActions = FetchTasks;
