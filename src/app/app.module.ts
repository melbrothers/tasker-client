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
import {StoreModule} from '@ngrx/store';
import {SharedModule} from './shared/shared.module';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { AccountModule } from 'app/modules/account/account.module';
import {reducers} from './app.reducer';

registerLocaleData(localeZh, 'zh-Hans');

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.googleClientId)
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  entryComponents: [],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    AccountModule,
    SocialLoginModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers)
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'zh-Hans'},
    {provide: AuthServiceConfig, useFactory: provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
