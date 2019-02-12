import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatChipsModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule,
  MatOptionModule, MatProgressSpinnerModule,
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
    MatStepperModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
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
    MatStepperModule
  ]
})
export class MaterialModule { }
