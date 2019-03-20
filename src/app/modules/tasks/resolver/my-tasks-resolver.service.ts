import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { TaskService } from 'app/core/services/task.service';
import {Observable} from 'rxjs';
import {Task} from 'app/store/models/task.model';
import * as fromRoot from '../../../store/reducers/app.reducer';
import {Store} from '@ngrx/store';
import {AuthComponent} from '../../account/auth/auth.component';
import {MatDialog} from '@angular/material';

@Injectable()
export class MyTasksDataResolver implements Resolve<Task[]> {
  constructor(
    private taskService: TaskService,
    private store: Store<fromRoot.State>,
    private authDialog: MatDialog,
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task[]> {
    this.store.select(fromRoot.getIsAuthenticated).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        return this.taskService.listMyTasks();
      } else {
        const dialogRef = this.authDialog.open(AuthComponent, {
          width: '540px',
          height: '600px',
          panelClass: 'registerDialog'
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        return null;
      }
    });
  }
}
