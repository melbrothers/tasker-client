import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TheErrorStateMatcher} from '../../../core/utils/errorMatcher';
import {GooglePlaceService} from '../../../core/services/google-place.service';
import {MatIconRegistry, MatSnackBar} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {TaskService} from '../../../core/services/task.service';
import * as moment from 'moment';
import {GeneralService} from '../../../core/services/general.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss'],
})
export class PostTaskComponent implements OnInit {
  isLinear = true;
  taskForm: FormGroup;
  matcher = new TheErrorStateMatcher();
  selectedIndex = 0;
  selectedSuburb = {
    display_name: null,
    longitude: 0,
    latitude: 0
  };
  deadline = moment().utc().format('YYYY-MM-DDTHH:mm:ssZ');
  isCertainDay = false;
  specified_times = {
    morning: false,
    midday: false,
    afternoon: false,
    evening: false
  };

  totalOrhourly = true;
  price = 0;
  hours = 1;
  validHours = '\d+';
  amount = 0;

  constructor(
    private _formBuilder: FormBuilder,
    private _googlePlaceService: GooglePlaceService,
    private _taskService: TaskService,
    private _generalService: GeneralService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'sunrise-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/lower-sun.svg'));
    iconRegistry.addSvgIcon(
      'sunset-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/sunset.svg'));
    iconRegistry.addSvgIcon(
      'moon-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/moon.svg'));
    this.createForm();
  }
  onAutocompleteSelected(ev) {
    console.log(ev);
    if (ev && ev.formatted_address) {
      this.selectedSuburb.display_name = ev.formatted_address;
      this.selectedSuburb.latitude = ev.geometry.location.lat();
      this.selectedSuburb.longitude = ev.geometry.location.lng();
      this.taskForm.controls['default_location'].setValue(this.selectedSuburb);
    }
  }
  onLocationSelected(ev) {
    console.log(ev);
    if (ev) {
      this.selectedSuburb.latitude = ev.latitude;
      this.selectedSuburb.longitude = ev.longitude;
    }
  }
  ngOnInit(): void {
    // get current location
    // TODO: currently temporarily does not need this
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(location => {
    //     console.log(location);
    //     if (location && location.coords) {
    //       this.coordinates = new Coordinates(location.coords.latitude, location.coords.longitude);
    //       this._googlePlaceService.getAddressFromLatLang(this.coordinates).subscribe(res => {
    //         console.log(res);
    //       });
    //     }
    //   });
    // }
  }

  createForm() {
    this.taskForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      online_or_phone: [false],
      default_location: [],
      deadline: [this.deadline],
      price: [this.amount, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]*$')]],
      specified_times: [this.specified_times]
    });
  }

  getSelectedWorkingType(): void {
    console.log(this.taskForm.get('onlineOrPhone').value);
  }

  getSelectedPayType(): boolean {
    return this.totalOrhourly;
  }

  getBudgetAmount(): void {
    if (this.totalOrhourly) {
      this.amount = Math.abs(this.price);
    } else {
      if (this.price > 0 && this.hours > 0) {
        this.amount = Math.abs(this.price * this.hours);
      }
    }
  }
  postTask() {
    console.log(this.taskForm);
    // transform the deadline data format
    // moment(this.deadline).utc().format('YYYY-MM-DDTHH:mm:ss.SSSZZ')
    // this.deadline = moment(this.deadline).utc().format('YYYY-MM-DDTHH:mm:ss.SSSZZ');

    console.log(moment(this.deadline).utc().format('YYYY-MM-DDTHH:mm:ssZ'));
    this.taskForm.controls['deadline'].setValue(moment(this.deadline).utc().format('YYYY-MM-DDTHH:mm:ssZ'));
    if (this.taskForm.valid) {
      this._taskService.postTask(this.taskForm).subscribe(res => {
        console.log(res);
        const message = 'Your task has been successfully created.';
        const notification = this._snackBar.open(message, 'done');
        notification.afterDismissed().subscribe(() => {
          this._router.navigate(['/tasks']);
        });
      });
    }
  }

  checkCertainTime(ev, timeName) {
    ev.stopPropagation();
    ev.preventDefault();
    switch (timeName) {
      case 'morning':
        if (this.specified_times.morning) {
          this.specified_times.morning = false;
        } else {
          this.specified_times.morning = true;
        }
        break;
      case 'midday':
        if (this.specified_times.midday) {
          this.specified_times.midday = false;
        } else {
          this.specified_times.midday = true;
        }
        break;
      case 'afternoon':
        if (this.specified_times.afternoon) {
          this.specified_times.afternoon = false;
        } else {
          this.specified_times.afternoon = true;
        }
        break;
      case 'evening':
        if (this.specified_times.evening) {
          this.specified_times.evening = false;
        } else {
          this.specified_times.evening = true;
        }
        break;
        return;
    }
  }
}
