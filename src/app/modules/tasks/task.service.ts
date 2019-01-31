import { Injectable } from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private api: ApiService) { }
  listTasks() {
    const requestUrl = `v1/tasks`;
    return this.api.get(requestUrl);
  }
}
