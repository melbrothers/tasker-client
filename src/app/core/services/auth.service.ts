import {Injectable} from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {ApiService} from './api.service';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as googleAuthService from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';
import {IUser} from 'app/store/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  redirectUrl: string;
  isLoggedIn: boolean;
  constructor(
    private api: ApiService,
    private googleAuth: googleAuthService.AuthService
              ) { }
  register(signinForm): Observable<any> {
    const endpointTag = 'register';
    // const headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
    // // headers.append('Access-Control-Allow-Origin', '*');
    const body = new HttpParams({fromObject: signinForm });
    return  this.api.post(endpointTag, body).pipe(shareReplay(1));
  }
  login(loginForm): Observable<any> {
    const endpointTag = 'login';
    // const headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
    // // headers.append('Access-Control-Allow-Origin', '*');
    const body = new HttpParams({fromObject: loginForm });
    return  this.api.post(endpointTag, body).pipe(shareReplay(1));
  }

  signInWithGoogle(): void {
    this.googleAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
  }


  logout(): void {
    this.googleAuth.signOut();
  }
}
