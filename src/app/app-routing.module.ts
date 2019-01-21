import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {JobListComponent} from './job/job-list/job-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ShellComponent} from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'jobs', component: JobListComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
