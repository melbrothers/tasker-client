import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  stickyClass: string;
  constructor() { }

  ngOnInit() {
  }

  stickyHeader(): void {
    if (document.body.scrollTop > 100) {
      this.stickyClass = 'clone sticky';
    } else {
      this.stickyClass = 'unsticky';
    }
  }

}
