import {Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit, OnDestroy, Inject} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {TaskService} from '../../../core/services/task.service';


@Component({
  selector: 'app-pay-dialog',
  templateUrl: './pay-dialog.component.html',
  styleUrls: ['./pay-dialog.component.scss']
})

export class PayDialogComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cardInfo') cardInfo: ElementRef;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  cardForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public price: number,
    private taskService: TaskService
  ) {
    this.createCardForm();
  }

  ngOnInit() {
  }

  createCardForm(): void {
    const controlsConfig = {
      comment: ['', [Validators.required]],
      price: ['', [Validators.required]]
    };
    this.cardForm = this.fb.group(controlsConfig);
  }

  ngAfterViewInit() {
    console.log(this.price);
    const style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    this.card = elements.create('card', {style: style});
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: FormGroup) {
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      this.taskService.payBid(token.id).subscribe(res => {
        console.log(res);

        const message = 'Your payment has been successfully submitted.';
        const notification = this._snackBar.open(message, 'done');

        notification.afterDismissed().subscribe(() => {
          // this._router.navigate(['/tasks']);
        });
      });
      // ...send the token to the your backend to process the charge
    }
  }

}
