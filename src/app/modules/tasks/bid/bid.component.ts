import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Task} from '../../../store/models/task.model';
import {TaskService} from '../../../core/services/task.service';
import * as Loading from '../../../store/actions/loading.actions';
import * as fromRoot from '../../../store/reducers/app.reducer';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {PayDialogComponent} from '../../pay/pay-dialog/pay-dialog.component';

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
    private taskService: TaskService,
    private store: Store<fromRoot.State>,
    private _snackBar: MatSnackBar,
    private _router: Router,
    public dialogRef: MatDialogRef<BidComponent>,
    private payDialog: MatDialog,
  ) {
    this.createBigForm();
  }

  ngOnInit() {
    console.log(this.data.task);
    this.task = this.data.task;
    this.receivedPay = this.task.price - 2.2;
    if (this.task.price > 0) {
      this.bidForm.controls['price'].setValue(this.task.price);
    }
  }

  openPay(): void {
    const dialogRef = this.payDialog.open(PayDialogComponent, {
      width: '540px',
      height: '600px',
      panelClass: 'payDialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  createBigForm(): void {
    const controlsConfig = {
      comment: ['', [Validators.required]],
      price: ['', [Validators.required]]
    };
    this.bidForm = this.fb.group(controlsConfig);
  }

  submitBid(slug): void {
    this.store.dispatch(new Loading.ShowLoading());
    this.taskService.postBid(slug, this.bidForm).subscribe(bidRes => {
      console.log(bidRes);

      this.store.dispatch(new Loading.HideLoading());
      this.dialogRef.close();
      const message = 'Your task bid has been successfully submitted.';
      const notification = this._snackBar.open(message, 'done');

      notification.afterDismissed().subscribe(() => {
        // this._router.navigate(['/tasks']);
      });
    });
  }

}
