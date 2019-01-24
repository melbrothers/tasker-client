import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RegisterComponent} from '../register/register.component';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {IUser} from 'app/store/model/user';
import {AuthService} from 'app/core/services/auth.service';
import {select, Store} from '@ngrx/store';
import * as fromUser from 'app/modules/user/state/user.reducer';
import * as userActions from 'app/modules/user/state/user.actions';

import {takeWhile} from 'rxjs/operators';
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
  isLoggedIn$: Observable<boolean>;
  private avatarUrl = '../assets/images/avatar.png';
  private socialUser: SocialUser;
  componentActive = true;
  constructor(private dialog: MatDialog,
              private activatedRouter: ActivatedRoute,
              private authService: AuthService,
              private store: Store<fromUser.UserState>,
              private googleAuth: googleAuthService.AuthService) { }

  ngOnInit() {
    const header = document.getElementById('header-container');
    this.isLoggedIn$ = this.store.select(fromUser.getLoginStatus);
    console.log(this.isLoggedIn$);
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
        this.store.pipe(select(fromUser.getLoginStatus), takeWhile(() => this.componentActive)).subscribe(
          (isLoggedIn) => {
            // this.isLoggedIn = isLoggedIn;
          }
        );
        // console.log(this.isLoggedIn);
      }
    });

  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '540px',
      height: '600px',
      panelClass: 'registerDialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
