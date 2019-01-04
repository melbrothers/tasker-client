import { Injectable } from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {ApiService} from './api.service';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private api: ApiService) { }
  register(signinForm): Observable<any> {
    const endpointTag = 'register';
    const headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');
    const body = new HttpParams({fromObject: signinForm });
    return  this.api.post(endpointTag, body, headers).pipe(shareReplay(1));
  }
  login(loginForm): Observable<any> {
    const endpointTag = 'login';
    const headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');
    const body = new HttpParams({fromObject: loginForm });
    return  this.api.post(endpointTag, body, headers).pipe(shareReplay(1));
  }
}
