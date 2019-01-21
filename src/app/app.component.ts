import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AuthService} from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tasker-client';
  name: string;
  constructor() {}

  ngOnInit(): void {
  }
}
