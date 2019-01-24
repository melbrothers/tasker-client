import { Component, OnInit } from '@angular/core';
import {AuthService} from 'app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor( private authService: AuthService) { }
  isAuthenticated$: Observable<boolean>;
  ngOnInit() {
  }
}
