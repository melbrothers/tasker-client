import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
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
