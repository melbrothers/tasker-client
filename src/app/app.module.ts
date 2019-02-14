import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import localeZh from '@angular/common/locales/zh-Hans';
import {CommonModule, registerLocaleData} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from './shared/shared.module';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { AccountModule } from 'app/modules/account/account.module';
import {reducers, metaReducers} from './store/reducers/app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptorService } from './core/interceptors/token-interceptor.service';
import {EffectsModule} from '@ngrx/effects';
import {TaskModule} from './modules/tasks/task.module';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './core/utils/utils';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
import {AgmCoreModule} from '@agm/core';

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
    AgmCoreModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    MatGoogleMapsAutocompleteModule,
    AccountModule,
    TaskModule,
    SocialLoginModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AgmCoreModule.forRoot({
      apiKey: environment.googlePlacesAPIKey, libraries: ["places"]
    }),
    MatGoogleMapsAutocompleteModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({serializer: CustomSerializer}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    CookieService,
    {provide: LOCALE_ID, useValue: 'zh-Hans'},
    {provide: AuthServiceConfig, useFactory: provideConfig},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
