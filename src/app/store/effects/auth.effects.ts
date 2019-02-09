import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActions, AuthActionTypes, SetAuthenticated, SetUnauthenticated} from '../actions/auth.actions';
import {mapTo, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {defer} from 'rxjs';
import {of} from 'rxjs';


@Injectable()
export class AuthEffects {
  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<SetAuthenticated>(AuthActionTypes.SET_AUTHENTICATED),
    tap(action => {
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    })
  );
  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<SetUnauthenticated>(AuthActionTypes.SET_UNAUTHENTICATED),
    tap(action => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('');
    })
  );
  @Effect()
  init$ = defer(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      return of(new SetAuthenticated(JSON.parse(userData)));
    } else {
      return of(new SetUnauthenticated());
    }
  });

  constructor(private actions$: Actions, private router: Router) {}
}
