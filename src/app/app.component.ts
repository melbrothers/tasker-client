import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {RegisterComponent} from './register/register.component';
import {AuthService} from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasker-client';
  animal: string;
  name: string;
  constructor(public dialog: MatDialog, private authService: AuthService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '480px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
