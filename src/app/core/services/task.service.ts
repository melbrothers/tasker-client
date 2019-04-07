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

  listMyTasks(): Observable<Task[]> {
    const requestUrl = `${environment.apiUrl}/v1/tasks?my_tasks=true`;
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

  filterTask(limit = 50, minPrice = 5, maxPrice = 999, taskState = 'posted', sortBy = 'recent'): Observable<Task[]> {
    const requestUrl = `${environment.apiUrl}/v1/tasks?limit=${limit}&sort=${sortBy}&max_price=${maxPrice}&min_price=${minPrice}&task_states=${taskState}`;
    return this.http.get<Task[]>(requestUrl);
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

  postComment(id, commentForm): Observable<Response> {
    const requestUrl = `${environment.apiUrl}/v1/comments/${id}/replies`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const comment = {body: commentForm.getRawValue().commentText};
    return this.http.post<Response>(requestUrl, comment, {headers});
  }

  postBid(slug, bidForm): Observable<Response> {
    const requestUrl = `${environment.apiUrl}/v1/tasks/${slug}/bids`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = bidForm.getRawValue();
    return this.http.post<Response>(requestUrl, body, {headers});
  }

  payBid(token): Observable<Response> {
    const requestUrl = `${environment.apiUrl}/v1/account/payment_methods`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      'token': token
    };
    return this.http.post<Response>(requestUrl, body, {headers});
  }

}
