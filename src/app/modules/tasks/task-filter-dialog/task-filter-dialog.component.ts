import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TaskService} from '../../../core/services/task.service';
import * as fromRoot from 'app/store/reducers/app.reducer';
import {Store} from '@ngrx/store';
import {FilterTasks, LoadTasks} from '../../../store/actions/task.actions';


@Component({
  selector: 'app-task-filter-dialog',
  templateUrl: './task-filter-dialog.component.html',
  styleUrls: ['./task-filter-dialog.component.scss']
})

export class TaskFilterDialogComponent implements OnInit {
  distance = 5;
  minPrice = 5;
  maxPrice = 999;
  stepGap = 5;
  assigned = false;
  taskState = 'posted';
  query = '';
  sortBy = 'recent';
  constructor(
    public dialogRef: MatDialogRef<TaskFilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService,
    private store: Store<fromRoot.State>
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.data);
  }

  updateStepGap(): void {
    const minPrice = this.minPrice;
    const maxPrice = this.maxPrice;
    if (this.minPrice >= 10 || this.maxPrice >= 10) {
      this.stepGap = 10;
    } else if (this.minPrice >= 50 || this.maxPrice >= 50) {
      this.stepGap = 50;
    } else if (this.minPrice >= 100 || this.maxPrice >= 100) {
      this.stepGap = 100;
    } else if (this.minPrice >= 200 || this.maxPrice >= 200) {
      this.stepGap = 300;
    } else if (this.minPrice >= 500 || this.maxPrice >= 500) {
      this.stepGap = 500;
    } else if (this.minPrice >= 2000 || this.maxPrice >= 2000) {
      this.stepGap = 3000;
    }

    if (this.minPrice > this.maxPrice) {
      this.minPrice = maxPrice;
      this.maxPrice = minPrice;
    }
  }

  filterTask() {
    if (this.assigned) {
      this.taskState = 'open';
    }

    this.taskService
      .filterTask(50, this.minPrice, this.maxPrice, this.taskState, this.sortBy)
      .subscribe( (filteredTask: any ) => {
        console.log(filteredTask);
        this.store.dispatch(new FilterTasks({tasks: filteredTask.data}));
      });
  }
}

