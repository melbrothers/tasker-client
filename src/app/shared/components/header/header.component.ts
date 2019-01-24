import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RegisterComponent} from '../register/register.component';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {IUser} from 'app/store/model/user';
import {Store} from '@ngrx/store';
import * as fromUser from 'app/modules/user/state/user.reducer';
import {takeWhile} from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as fromRoot from 'app/app.reducer';

/* NgRx */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: IUser;
  isAuthenticated$: Observable<boolean>;
  componentActive = true;
  constructor(private dialog: MatDialog,
              private activatedRouter: ActivatedRoute,
              private store: Store<fromRoot.State>) { }

  ngOnInit() {
    const header = document.getElementById('header-container');
    // this.isLoggedIn = this.authService.isLoggedIn;
    this.isAuthenticated$ = this.store.select(fromRoot.getIsAuthenticated);

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
