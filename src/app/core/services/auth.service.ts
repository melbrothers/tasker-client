import {Injectable} from '@angular/core';
import {HttpHeaders, HttpParams, HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as googleAuthService from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';
import {SocialUser} from 'angularx-social-login';
import * as Auth from '../../store/actions/auth.actions';
import * as fromAuth from '../../store/reducers/auth.reducer';
import {Store} from '@ngrx/store';
import { User } from 'app/store/models/user.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  constructor(
    private http: HttpClient,
    private store: Store<fromAuth.AuthState>,
    private googleAuth: googleAuthService.AuthService
              ) { }
  register(signinForm): Observable<any> {
    const endpointTag = `${environment.apiUrl}/register`;
    const body = new HttpParams({fromObject: signinForm });
    return  this.http.post<User>(endpointTag, body).pipe(shareReplay(1));
  }

  login(loginForm): Observable<any> {
    const endpointTag = `${environment.apiUrl}/login`;
    const body = new HttpParams({fromObject: loginForm });
    return  this.http.post(endpointTag, body).pipe(shareReplay(1));
  }

  signInWithGoogle(): Observable<User> {
    const requestUrl = `${environment.apiUrl}/social/google/login`;
    return Observable.create((observer) => {
       this.googleAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then((socialUser: SocialUser) => {
        this.http.post(requestUrl, {token: socialUser.authToken})
        .pipe(shareReplay(1)).subscribe(user => {
          observer.next(user);
        });
     });
    });
  }

  logout(): void  {
    this.store.select(fromAuth.getIsAuthenticated).subscribe(isAuth => {
      if (isAuth) {
        // check if google login
        this.googleAuth.authState.subscribe((user: SocialUser) => {
          // google login
          if (user) {
            this.googleAuth.signOut();
          }
        });
      }
      this.store.dispatch(new Auth.SetUnauthenticated());
    });
  }
}
