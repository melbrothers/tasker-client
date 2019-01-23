import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './shared/pages/home/home.component';
import {Error404Component} from './shared/pages/error-404/error-404.component';
import {TaskListComponent} from './modules/tasks/task-list/task-list.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'tasks', component: TaskListComponent},
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
