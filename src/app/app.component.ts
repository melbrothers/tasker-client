import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AuthService} from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tasker-client';
  name: string;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.stickyHeader);
  }
  stickyHeader(): void {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const header = document.getElementById('header-container');
    if (number > 82) {
      header.classList.remove('transparent-header');
      header.classList.add('sticky');
    } else {
      if (document.location.pathname == null) {
        header.classList.remove('sticky');
        header.classList.add('transparent-header');
      } else {
        header.classList.remove('transparent-header');
      }
    }
  }
}
