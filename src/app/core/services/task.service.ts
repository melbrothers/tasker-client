import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from 'environments/environment';
import {Task} from '../../store/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }
  listTasks(): Observable<Task[]> {
    const requestUrl = `${environment.apiUrl}/v1/tasks`;
    return this.http.get<Task[]>(requestUrl);
  }

  /**
   * GET task
   * @param slug of the task
   */
  getTask(slug): Observable<Task> {
    const requestUrl = `${environment.apiUrl}/v1/tasks/${slug}`;
    return this.http.get<Task>(requestUrl);
  }

  /**
   * POST task
   * @param task form
   */
  postTask(taskForm): Observable<Response> {
    const requestUrl = `${environment.apiUrl}/v1/tasks`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = taskForm.getRawValue();
    return this.http.post<Response>(requestUrl, body, {headers: headers});
  }
}
