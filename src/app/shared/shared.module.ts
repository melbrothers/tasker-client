import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './pages/home/home.component';
import {Error404Component} from './pages/error-404/error-404.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../store/effects/auth.effects';
import {LoadingComponent} from './components/loading/loading.component';

@NgModule({
    imports: [
      CommonModule,
      MaterialModule,
      ReactiveFormsModule,
      RouterModule
    ],
    declarations: [
      HomeComponent,
      Error404Component,
      HeaderComponent,
      FooterComponent,
      LoadingComponent
    ],
    exports: [
      CommonModule,
      MaterialModule,
      HeaderComponent,
      FooterComponent,
      LoadingComponent
    ],
  })
export class SharedModule {
}
