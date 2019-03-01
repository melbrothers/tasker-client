import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from 'app/store/reducers/app.reducer';
import * as Loading from 'app/store/actions/loading.actions';
import {TaskService} from '../../../core/services/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Task } from 'app/store/models/task.model';
import {MatDialog} from '@angular/material';
import {TaskFilterDialogComponent} from '../task-filter-dialog/task-filter-dialog.component';
import {LoadTasks, TaskActions} from '../../../store/actions/task.actions';

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
    private dialog: MatDialog,
    private router: Router
  ) {}

  viewTask(task: Task): void {
    this.store.dispatch(new Loading.HideLoading());
    this.selectedTask = task;
    this.router.navigate(['tasks', task.slug])
  }

  openFilterDialog(): void {
    const dialogRef = this.dialog.open(TaskFilterDialogComponent, {
      width: '500px',
      height: 'auto',
      data: {
        selectedTask: this.selectedTask,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.animal = result;
      if (result) {
        this.store.select(fromRoot.getTasks).subscribe((tasks) => {
          this.tasks = tasks;
        });
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.tasks = data['tasks'].data;
      this.selectedTask = data['tasks'].data[0];
      this.store.dispatch(new LoadTasks({tasks: data['tasks'].data}));
      this.store.dispatch(new Loading.HideLoading());
    });
  }
}
