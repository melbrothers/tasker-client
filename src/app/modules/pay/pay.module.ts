import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayDialogComponent } from './pay-dialog/pay-dialog.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [PayDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    PayDialogComponent
  ],
  entryComponents: [
    PayDialogComponent
  ]
})
export class PayModule { }
