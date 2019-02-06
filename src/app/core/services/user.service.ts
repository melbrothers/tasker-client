import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../store/models/user.model';
import {environment} from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getCurrentUser(): Observable<User> {
    const requestUrl = `${environment.apiUrl}/v1/users/me`;
    return this.http.get<User>(requestUrl);
  }
}
