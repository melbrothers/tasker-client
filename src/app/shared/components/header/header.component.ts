import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthComponent} from '../auth/auth.component';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {IUser} from 'app/store/models/user';
import {Store} from '@ngrx/store';
import * as fromRoot from 'app/app.reducer';

import {SocialUser} from 'angularx-social-login';
import * as googleAuthService from 'angularx-social-login';
import {Observable} from 'rxjs';

/* NgRx */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: IUser;
  isAuthenticated$: Observable<boolean>;
  private avatarUrl = '../assets/images/avatar.png';
  private socialUser: SocialUser;
  componentActive = true;
  constructor(private dialog: MatDialog,
              private activatedRouter: ActivatedRoute,
              private store: Store<fromRoot.State>,
              private googleAuth: googleAuthService.AuthService) { }

  ngOnInit() {
    const header = document.getElementById('header-container');
    this.isAuthenticated$ = this.store.select(fromRoot.getIsAuthenticated);
    console.log(this.isAuthenticated$);
    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    this.activatedRouter.url.subscribe(url => {
      console.log(url);
      if (url.length) {
        const pathName = url[0].path;
        if (pathName == null) {
          header.classList.add('transparent-header');
        }
      }
    });
    this.googleAuth.authState.subscribe((user) => {
      // google login
      if (user) {
        this.socialUser = user;
        // this.isLoggedIn$ = (user != null);
        if (user.photoUrl) {
          this.avatarUrl = user.photoUrl;
        }
        // this.store.dispatch(new userActions.SetLoginStatus(this.isLoggedIn$));
      } else {
        // normal login
        // this.isLoggedIn = this.authService.isLoggedIn;
        this.isAuthenticated$ = this.store.select(fromRoot.getIsAuthenticated);
      }
    });

  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '540px',
      height: '600px',
      panelClass: 'registerDialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
