import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { RequestTask, SelectTask, TaskActionTypes} from '../actions/task.actions';
import {map, mergeMap} from 'rxjs/operators';
import {TaskService} from '../../core/services/task.service';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}
  @Effect()
  loadTasks$ = this.actions$.pipe(
    ofType<SelectTask>(TaskActionTypes.SELECT_TASK),
    mergeMap(action => this.taskService.getTask(action.payload.task.slug)),
    map(task => new SelectTask({task})),
  );
}
