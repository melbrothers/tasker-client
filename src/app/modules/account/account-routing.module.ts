import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'app/modules/account/dashboard/dashboard.component';
import { AccountComponent } from 'app/modules/account/account.component';

const routes: Routes = [
    {
        path: 'account',
        component: AccountComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {}
