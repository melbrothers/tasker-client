import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { TaskListComponent } from 'app/modules/tasks/task-list/task-list.component';
import { TaskDataResolver } from 'app/modules/tasks/tasks-resolver.service';
import {TaskComponent} from './task/task.component';

const routes = [
  {
    path: 'tasks',
    component: TaskListComponent,
    resolve: {
        tasks: TaskDataResolver
    },
    children: [
      {
        path: 'tasks/:slug',
        component: TaskComponent
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    TaskDataResolver
  ]
})
export class TaskRoutingModule {

}
