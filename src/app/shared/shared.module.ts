import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {Error404Component} from './pages/error-404/error-404.component';
import {RouterModule} from '@angular/router';
import {LoadingComponent} from './components/loading/loading.component';
import {ConvertDateTimeToFromNowPipe} from './pipe/convert-date-time-to-from-now.pipe';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      MaterialModule,
      ReactiveFormsModule,
      RouterModule
    ],
    declarations: [
      Error404Component,
      HeaderComponent,
      FooterComponent,
      LoadingComponent,
      ConvertDateTimeToFromNowPipe
    ],
    exports: [
      CommonModule,
      MaterialModule,
      HeaderComponent,
      FooterComponent,
      LoadingComponent,
      ConvertDateTimeToFromNowPipe
    ],
  })
export class SharedModule {
}
