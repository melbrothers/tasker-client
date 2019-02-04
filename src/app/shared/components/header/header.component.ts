import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthComponent} from '../auth/auth.component';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {IUser} from 'app/store/models/user';
import {Store} from '@ngrx/store';
import * as fromRoot from 'app/store/reducers/app.reducer';

import {SocialUser} from 'angularx-social-login';
import * as googleAuthService from 'angularx-social-login';
import {Observable} from 'rxjs';
import {AuthService} from '../../../core/services/auth.service';

/* NgRx */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: IUser;
  isAuthenticated$: Observable<boolean>;
  avatarUrl = '../assets/images/avatar.png';
  socialUser: SocialUser;
  componentActive = true;
  constructor(private dialog: MatDialog,
              private activatedRouter: ActivatedRoute,
              private store: Store<fromRoot.State>,
              private authService: AuthService,
              private googleAuth: googleAuthService.AuthService) { }

  ngOnInit() {
    const header = document.getElementById('header-container');
    this.isAuthenticated$ = this.store.select(fromRoot.getIsAuthenticated);
    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    this.activatedRouter.url.subscribe(url => {
      if (url.length) {
        const pathName = url[0].path;
        if (pathName == null) {
          header.classList.add('transparent-header');
        }
      }
    });
    // TODO: need to refactor, get user info from authState
    this.googleAuth.authState.subscribe((user) => {
      // google login
      if (user) {
        this.socialUser = user;
        // this.isLoggedIn$ = (user != null);
        if (user.photoUrl) {
          this.avatarUrl = user.photoUrl;
        }
      }
    });
    this.activatedRouter.data.subscribe(data => {
      if (Object.keys(data).length > 0 ) {
        console.log(data);
        this.currentUser = data['account'].data;
        console.log(this.currentUser);
      }
    });
  }
  logout(): void {
    this.authService.logout();
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
