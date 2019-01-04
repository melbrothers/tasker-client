import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatOptionModule, MatProgressSpinnerModule,
  MatSelectModule, MatTabsModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
