import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {JobListComponent} from './job-list/job-list.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'jobs', component: JobListComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
