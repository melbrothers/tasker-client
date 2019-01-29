import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'app/modules/account/dashboard/dashboard.component';
import { AccountComponent } from 'app/modules/account/account.component';
import { ProfileComponent } from 'app/modules/account/profile/profile.component';

const routes: Routes = [
    {
        path: 'account',
        component: AccountComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {}
