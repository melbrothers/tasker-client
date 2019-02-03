import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { TaskListComponent } from 'app/modules/tasks/task-list/task-list.component';
import { TaskDataResolver } from 'app/modules/tasks/tasks-resolver.service';

const routes = [
    {
        path: 'tasks',
        component: TaskListComponent,
        resolve: {
            tasks: TaskDataResolver
        }
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class TaskRoutingModule {

}
