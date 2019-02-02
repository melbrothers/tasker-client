import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from 'app/modules/tasks/task-list/task-list.component';
import { TaskRoutingModule } from 'app/modules/tasks/task-routing.module';
import {TaskComponent} from './task/task.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskModule { }
