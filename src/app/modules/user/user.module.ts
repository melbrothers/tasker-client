import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from 'app/shared/modules/material.module';
import {StoreModule} from '@ngrx/store';
import {reducer} from './state/user.reducer';
import {UserNotificationsComponent} from './user-notifications/user-notifications.component';
import {CommonModule} from '@angular/common';
const userRoutes: Routes = [
 // { path: 'register', component: RegisterComponent }
];
@NgModule({
  declarations: [
    UserNotificationsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', reducer)
  ]
})
export class UserModule { }
