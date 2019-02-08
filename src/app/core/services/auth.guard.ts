import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router,
         CanActivate } from '@angular/router';

import { AuthService } from './auth.service';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'app/store/reducers/app.reducer';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromRoot.State>,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(fromRoot.getIsAuthenticated),
      tap(isAuthentcated => {
        console.log(isAuthentcated);
        if (!isAuthentcated) {
          this.router.navigateByUrl('/login');
        }
      }));
  }
}
