import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as Auth from 'app/store/actions/auth.actions';
import * as fromRoot from 'app/store/reducers/app.reducer';
import { UserService } from './core/services/user.service';
import { User } from './store/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tasker-client';
  name: string;
  constructor(private _userService: UserService, private store: Store<fromRoot.State>) {
    this._userService.getCurrentUser().subscribe( (user: User) => {
      console.log(user);
      this.store.dispatch(new Auth.SetAuthenticated({user}));
    }, () => {
      this.store.dispatch(new Auth.SetUnauthenticated());
    });
  }

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
