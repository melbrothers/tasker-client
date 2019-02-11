import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'app/modules/account/dashboard/dashboard.component';
import { AccountComponent } from 'app/modules/account/account.component';
import { ProfileComponent } from 'app/modules/account/profile/profile.component';
import {AccountDataResolver} from './account-resolver.service';
import { AuthGuard } from 'app/core/services/auth.guard';
import {PostTaskComponent} from './post-task/post-task.component';

const routes: Routes = [
    {
        path: 'account',
        component: AccountComponent,
        resolve: {
          account: AccountDataResolver
        },
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'post-task',
            component: PostTaskComponent
          },
          {
            path: 'profile',
            component: ProfileComponent
          }
        ],
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {}
