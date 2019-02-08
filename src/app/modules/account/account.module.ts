import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { DashboardComponent } from 'app/modules/account/dashboard/dashboard.component';
import { AccountRoutingModule } from 'app/modules/account/account-routing.module';
import { AccountComponent } from './account.component';
import { SideNavComponent } from 'app/modules/account/side-nav/side-nav.component';
import { ProfileComponent } from './profile/profile.component';
import {UserService} from '../../core/services/user.service';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    MyTasksComponent,
    DashboardComponent,
    AccountComponent,
    SideNavComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    StoreModule.forFeature('users')
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    UserService
  ]
})
export class AccountModule { }
