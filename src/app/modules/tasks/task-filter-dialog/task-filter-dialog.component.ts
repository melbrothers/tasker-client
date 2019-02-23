import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-task-filter-dialog',
  templateUrl: './task-filter-dialog.component.html',
  styleUrls: ['./task-filter-dialog.component.scss']
})

export class TaskFilterDialogComponent implements OnInit {
  distance = 5;
  minPrice = 5;
  maxPrice = 999;
  stepGap = 5;
  assigned = false;
  constructor(
    public dialogRef: MatDialogRef<TaskFilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.data);
  }

  updateStepGap(): void {
    const minPrice = this.minPrice;
    const maxPrice = this.maxPrice;
    if (this.minPrice >= 10 || this.maxPrice >= 10) {
      this.stepGap = 10;
    } else if (this.minPrice >= 50 || this.maxPrice >= 50) {
      this.stepGap = 50;
    } else if (this.minPrice >= 100 || this.maxPrice >= 100) {
      this.stepGap = 100;
    } else if (this.minPrice >= 200 || this.maxPrice >= 200) {
      this.stepGap = 300;
    } else if (this.minPrice >= 500 || this.maxPrice >= 500) {
      this.stepGap = 500;
    } else if (this.minPrice >= 2000 || this.maxPrice >= 2000) {
      this.stepGap = 3000;
    }

    if (this.minPrice > this.maxPrice) {
      this.minPrice = maxPrice;
      this.maxPrice = minPrice;
    }
  }
}
