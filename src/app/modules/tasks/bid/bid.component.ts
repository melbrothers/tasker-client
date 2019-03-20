import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Task} from '../../../store/models/task.model';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class BidComponent implements OnInit {
  task: Task;
  bidForm: FormGroup;
  receivedPay: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) {
    this.createBigForm();
  }

  ngOnInit() {
    console.log(this.data.task);
    this.task = this.data.task;
    this.receivedPay = this.task.price - 2.2;
  }

  createBigForm(): void {
    const controlsConfig = {
      comment: ['', [Validators.required]],
      price: ['', [Validators.required]]
    };
    this.bidForm = this.fb.group(controlsConfig);
  }

}
