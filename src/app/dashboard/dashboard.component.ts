import { Component, OnInit } from '@angular/core';
import {IUser} from '../model/user';
import {AuthService} from '../providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor( private authService: AuthService) { }
  ngOnInit() {
  }
}
