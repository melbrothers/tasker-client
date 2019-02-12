import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate} from '@angular/router';
import {Store, select} from '@ngrx/store';
import * as fromRoot from 'app/store/reducers/app.reducer';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {AuthComponent} from '../../modules/account/auth/auth.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromRoot.State>,
              private authDialog: MatDialog,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(fromRoot.getIsAuthenticated),
      tap(isAuthentcated => {
        console.log(isAuthentcated);
        if (!isAuthentcated) {
          this.router.navigateByUrl('').then(() => {
            const dialogRef = this.authDialog.open(AuthComponent, {
              width: '540px',
              height: '600px',
              panelClass: 'registerDialog'
            });

            dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
            });
          });
        }
      }));
  }
}
