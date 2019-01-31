import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ITask} from '../../store/models/task';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }
  listTasks(): Observable<ITask> {
    const requestUrl = `${environment.apiUrl}/v1/tasks`;
    return this.http.get<ITask>(requestUrl);
  }
}
