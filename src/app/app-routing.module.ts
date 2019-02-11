import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './shared/pages/home/home.component';
import {Error404Component} from './shared/pages/error-404/error-404.component';
import { TaskModule } from 'app/modules/tasks/task.module';
import { AccountModule } from 'app/modules/account/account.module';
import {SelectiveStrategyService} from './core/services/selective-strategy.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'welcome', component: HomeComponent,
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    TaskModule,
    AccountModule,
    RouterModule.forRoot(routes, {preloadingStrategy: SelectiveStrategyService})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
