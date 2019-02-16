import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule,
  MatOptionModule, MatProgressSpinnerModule, MatRadioModule,
  MatSelectModule, MatSnackBarModule, MatStepperModule, MatTabsModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSnackBarModule,
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
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatOptionModule,
    MatTabsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
