import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from 'app/store/reducers/app.reducer';
import * as Loading from 'app/store/actions/loading.actions';

import {TaskService} from '../../../core/services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'app/store/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  selectedTask: Task;
  tasks: Task[];
  constructor(
    private store: Store<fromRoot.State>,
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute) {
  }

  viewTask(task: Task): void {
    this.store.dispatch(new Loading.ShowLoading());
    this.taskService.getTask(task.slug).subscribe((t: Task) => {
      this.selectedTask = t;
      this.store.dispatch(new Loading.HideLoading());
    });
  }

  ngOnInit() {
    this.store.dispatch(new Loading.ShowLoading());
    this.activatedRoute.data.subscribe(data => {
      this.tasks = data['tasks'].data;
      this.store.dispatch(new Loading.HideLoading());
    });
  }
}
