import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RegisterComponent} from '../user/register/register.component';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../model/user';
import {AuthService} from '../providers/auth.service';
import {select, Store} from '@ngrx/store';
import * as fromUser from '../user/state/user.reducer';
import {takeWhile} from 'rxjs/operators';

/* NgRx */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: IUser;
  isLoggedIn: boolean;
  componentActive = true;
  constructor(private dialog: MatDialog,
              private activatedRouter: ActivatedRoute,
              private authService: AuthService,
              private store: Store<fromUser.UserState>) { }

  ngOnInit() {
    const header = document.getElementById('header-container');
    // this.isLoggedIn = this.authService.isLoggedIn;
    this.store.pipe(select(fromUser.getLoginStatus), takeWhile(() => this.componentActive)).subscribe(
      (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      }
    );
    console.log(this.isLoggedIn);
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
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '540px',
      panelClass: 'registerDialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
