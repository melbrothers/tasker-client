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
import {CommonModule, registerLocaleData} from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './ui/components/header/header.component';
import { FooterComponent } from './ui/components/footer/footer.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {StoreModule} from '@ngrx/store';
import { ShellComponent } from './shell/shell.component';
import { TaskListComponent } from './account/tasks/task-list/task-list.component';
import { LayoutComponent } from './ui/containers/layout/layout.component';
import { UiModule } from './ui/ui.module';
import {UserModule} from './user/user.module';
import { UserNotificationsComponent } from './user/user-notifications/user-notifications.component';

registerLocaleData(localeZh, 'zh-Hans');

@NgModule({
  entryComponents: [],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    JobListComponent,
    DashboardComponent,
    UserNotificationsComponent,
    ShellComponent,
    TaskListComponent,
    LayoutComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    UserModule,
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
