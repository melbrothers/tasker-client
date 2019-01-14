import {Component, Input, OnInit} from '@angular/core';
import {RegisterComponent} from '../register/register.component';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;
  constructor(private dialog: MatDialog,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    const header = document.getElementById('header-container');
    header.classList.add('transparent-header');
    this.activatedRouter.url.subscribe(url => {
      console.log(url);
      if (url.length) {
        const pathName = url[0].path;
        switch (pathName) {
          case 'jobs':
            header.classList.remove('transparent-header');
            break;
        }
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '36%',
      panelClass: 'registerDialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
