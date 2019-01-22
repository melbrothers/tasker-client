import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {reducer} from './state/user.reducer';
import {UserNotificationsComponent} from './user-notifications/user-notifications.component';
import {CommonModule} from '@angular/common';
const userRoutes: Routes = [
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  declarations: [
    RegisterComponent,
    UserNotificationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', reducer)
  ]
})
export class UserModule { }
