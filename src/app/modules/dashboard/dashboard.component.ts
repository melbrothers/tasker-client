import { Component, OnInit } from '@angular/core';
import {AuthService} from 'app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor( private authService: AuthService) { }
  isLoggedIn: boolean;
  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
