import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
