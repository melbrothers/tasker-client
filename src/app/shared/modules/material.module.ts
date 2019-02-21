import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
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
    MatMenuModule,
    MatListModule,
    MatSnackBarModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatRadioModule,
    MatButtonToggleModule
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
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatOptionModule,
    MatTabsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
