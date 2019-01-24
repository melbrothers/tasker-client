import { Injectable } from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {ApiService} from './api.service';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IUser} from 'app/store/model/user';
import * as fromRoot from 'app/app.reducer';
import * as Auth from 'app/store/actions/auth.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  redirectUrl: string;
  constructor(private api: ApiService, private store: Store<fromRoot.State>) { }
  register(signinForm): Observable<any> {
    const endpointTag = 'register';
    const headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');
    const body = new HttpParams({fromObject: signinForm });
    this.store.dispatch(new Auth.SetAuthenticated());
    return this.api.post(endpointTag, body, headers).pipe(shareReplay(1));
  }
  login(loginForm): Observable<any> {
    const endpointTag = 'login';
    const headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');
    const body = new HttpParams({fromObject: loginForm });
    this.store.dispatch(new Auth.SetAuthenticated());
    return this.api.post(endpointTag, body, headers).pipe(shareReplay(1));
  }
  logout(): void {
    localStorage.clear();
  }
}
