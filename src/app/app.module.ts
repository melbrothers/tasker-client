import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import localeZh from '@angular/common/locales/zh-Hans';
import {registerLocaleData} from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {RegisterComponent} from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';
import {StoreModule} from '@ngrx/store';
import { ShellComponent } from './shell/shell.component';
import { TaskListComponent } from './account/tasks/task-list/task-list.component';
import { LayoutComponent } from './container/layout/layout.component';
import { UiModule } from './ui/ui.module';

registerLocaleData(localeZh, 'zh-Hans');

@NgModule({
  entryComponents: [RegisterComponent],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    JobListComponent,
    DashboardComponent,
    UserNotificationsComponent,
    ShellComponent,
    TaskListComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({}),
    UiModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'zh-Hans'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
