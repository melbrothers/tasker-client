import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { DashboardComponent } from 'app/modules/account/dashboard/dashboard.component';
import { AccountRoutingModule } from 'app/modules/account/account-routing.module';
import { AccountComponent } from './account.component';
import { SideNavComponent } from 'app/modules/account/side-nav/side-nav.component';

@NgModule({
  declarations: [
    MyTasksComponent,
    DashboardComponent,
    AccountComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class AccountModule { }
