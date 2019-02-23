import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from 'app/modules/tasks/task-list/task-list.component';
import { TaskRoutingModule } from 'app/modules/tasks/task-routing.module';
import {TaskComponent} from './task/task.component';
import { TaskService } from 'app/core/services/task.service';
import { TaskDataResolver } from 'app/modules/tasks/tasks-resolver.service';
import {TaskMapComponent} from './task-map/task-map.component';
import {SharedModule} from '../../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {taskReducer} from '../../store/reducers/task.reducer';
import {TaskFilterDialogComponent} from './task-filter-dialog/task-filter-dialog.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent,
    TaskMapComponent,
    TaskFilterDialogComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
    StoreModule.forFeature('tasks', taskReducer)
  ],
  providers: [
    TaskService,
    TaskDataResolver
  ],
  exports: [
    TaskListComponent,
    TaskFilterDialogComponent
  ],
  entryComponents: [
    TaskFilterDialogComponent
  ]
})
export class TaskModule { }
