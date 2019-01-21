import {Component, Input, OnInit} from '@angular/core';
import {RegisterComponent} from '../register/register.component';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../model/user';
import {AuthService} from '../providers/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: IUser;
  isLoggedIn: boolean;
  constructor(private dialog: MatDialog,
              private activatedRouter: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    const header = document.getElementById('header-container');
    this.isLoggedIn = this.authService.isLoggedIn;
    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    this.activatedRouter.url.subscribe(url => {
      console.log(url);
      if (url.length) {
        const pathName = url[0].path;
        if (pathName == null) {
          header.classList.add('transparent-header');
        }

        // switch (pathName) {
        //   case 'jobs':
        //     header.classList.remove('transparent-header');
        //     break;
        //   case 'dashboard':
        //     header.classList.remove('transparent-header');
        //     break;
        // }
      }
    });
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
