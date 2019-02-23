import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from 'app/store/reducers/app.reducer';
import * as Loading from 'app/store/actions/loading.actions';
import * as TaskAction from 'app/store/actions/task.actions';
import {TaskService} from '../../../core/services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'app/store/models/task.model';
import {MatDialog} from '@angular/material';
import {TaskFilterDialogComponent} from '../task-filter-dialog/task-filter-dialog.component';

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
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog) {
  }

  viewTask(task: Task): void {
    this.store.dispatch(new Loading.HideLoading());
    this.selectedTask = task;
  }

  openFilterDialog(): void {
    const dialogRef = this.dialog.open(TaskFilterDialogComponent, {
      width: '500px',
      height: 'auto',
      data: this.selectedTask
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.tasks = data['tasks'].data;
      this.selectedTask = this.tasks[0];
      this.store.dispatch(new TaskAction.LoadTasks({tasks: this.tasks}));
      this.store.dispatch(new Loading.HideLoading());
    });
  }
}
