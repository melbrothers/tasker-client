import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromRoot from '../../../store/reducers/app.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getLoadingStatus);
  }
}
