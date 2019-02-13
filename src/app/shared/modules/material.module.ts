import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule,
  MatOptionModule, MatProgressSpinnerModule, MatRadioModule,
  MatSelectModule, MatStepperModule, MatTabsModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatRadioModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
