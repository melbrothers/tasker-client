import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './shared/pages/home/home.component';
import {Error404Component} from './shared/pages/error-404/error-404.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import { TaskModule } from 'app/modules/tasks/task.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    TaskModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
