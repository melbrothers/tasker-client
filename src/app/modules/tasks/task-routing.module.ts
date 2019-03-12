import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { TaskListComponent } from 'app/modules/tasks/task-list/task-list.component';
import {TaskDataResolver} from './resolver/tasks-resolver.service';
import {MyTasksDataResolver} from './resolver/my-tasks-resolver.service';
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
        path: ':slug',
        component: TaskComponent
      }
    ]
  },
  {
    path: 'my-tasks',
    component: TaskListComponent,
    resolve: {
      tasks: MyTasksDataResolver
    }
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    TaskDataResolver,
    MyTasksDataResolver
  ]
})
export class TaskRoutingModule {

}
