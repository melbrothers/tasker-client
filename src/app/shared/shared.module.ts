import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './pages/home/home.component';
import {Error404Component} from './pages/error-404/error-404.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    imports: [
      CommonModule,
      MaterialModule,
      ReactiveFormsModule,
      RouterModule,
    ],
    declarations: [
      HomeComponent,
      Error404Component,
      HeaderComponent,
      FooterComponent,
      RegisterComponent
    ],
    exports: [
      CommonModule,
      MaterialModule,
      HeaderComponent,
      FooterComponent,
      RegisterComponent
    ],
    entryComponents: [RegisterComponent],
  })
export class SharedModule {
}
