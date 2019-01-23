import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import localeZh from '@angular/common/locales/zh-Hans';
import {CommonModule, registerLocaleData} from '@angular/common';
import {MaterialModule} from './shared/modules/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { reducers } from './app.reducer';
import { TaskModule } from 'app/modules/tasks/task.module';

registerLocaleData(localeZh, 'zh-Hans');

@NgModule({
  entryComponents: [],
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers),
    SharedModule,
    RouterModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'zh-Hans'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
