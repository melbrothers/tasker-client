import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TaskService } from 'app/core/services/task.service';

@Injectable()
export class TaskDataResolver implements Resolve<any> {
    constructor(private taskService: TaskService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.taskService.listTasks();
    }
}
