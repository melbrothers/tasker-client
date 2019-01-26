import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { TaskListComponent } from 'app/modules/tasks/task-list/task-list.component';

const routes = [
    {
        path: 'tasks',
        component: TaskListComponent
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
