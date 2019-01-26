import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { DashboardComponent } from 'app/modules/account/dashboard/dashboard.component';

@NgModule({
  declarations: [
    MyTasksComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class AccountModule { }
