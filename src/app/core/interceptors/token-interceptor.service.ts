import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  token = '';

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const self = this;
    const accessToken = localStorage.getItem('access_token');
    if (accessToken && !(request.url.includes('register')) && !(request.url.includes('login'))) {
      if (accessToken) {
        self.token = accessToken;
      }
      request = request.clone({
        withCredentials: true
      });
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}
