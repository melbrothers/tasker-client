import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RegisterComponent} from '../user/register/register.component';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../model/user';
import {AuthService} from '../providers/auth.service';
import {select, Store} from '@ngrx/store';
import * as fromUser from '../user/state/user.reducer';
import * as userActions from '../user/state/user.actions';

import {takeWhile} from 'rxjs/operators';
import {SocialUser} from 'angularx-social-login';
import * as googleAuthService from 'angularx-social-login';

/* NgRx */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: IUser;
  isLoggedIn: boolean;
  private avatarUrl: string;
  private socialUser: SocialUser;
  componentActive = true;
  constructor(private dialog: MatDialog,
              private activatedRouter: ActivatedRoute,
              private authService: AuthService,
              private store: Store<fromUser.UserState>,
              private googleAuth: googleAuthService.AuthService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    const header = document.getElementById('header-container');
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
        this.isLoggedIn = (user != null);
        if (user.photoUrl) {
          this.avatarUrl = user.photoUrl;
        }
        this.store.dispatch(new userActions.SetLoginStatus(this.isLoggedIn));
      } else {
        // normal login
        // this.isLoggedIn = this.authService.isLoggedIn;
        this.store.pipe(select(fromUser.getLoginStatus), takeWhile(() => this.componentActive)).subscribe(
          (isLoggedIn) => {
            this.isLoggedIn = isLoggedIn;
          }
        );
        console.log(this.isLoggedIn);
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
