import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TaskService } from 'app/core/services/task.service';
import {Observable} from 'rxjs';
import {Task} from '../../store/models/task.model';

@Injectable()
export class TaskDataResolver implements Resolve<Task> {
    constructor(private taskService: TaskService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> {
        return this.taskService.listTasks();
    }
}
