import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TheErrorStateMatcher} from '../../../core/utils/errorMatcher';
import {Coordinates} from '../../../store/models/coordinates.model';
import {GooglePlaceService} from '../../../core/services/google-place.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss'],
})
export class PostTaskComponent implements OnInit {
  isLinear = true;
  taskForm: FormGroup;
  matcher = new TheErrorStateMatcher();
  coordinates: Coordinates;
  selectedSuburb = {
    display_name: null,
    longitude: 0,
    lantitude: 0
  };
  deadline = new Date();
  isCertainDay = false;
  morning = false;
  midday = false;
  afternoon = false;
  evening = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _googlePlaceService: GooglePlaceService,
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
    }
  }
  onLocationSelected(ev) {
    console.log(ev);
    if (ev) {
      this.selectedSuburb.lantitude = ev.latitude;
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
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      online_or_phone: [false],
      totalOrHourly: [true],
      geo: [],
      deadline: [this.deadline]
    });
  }

  getSelectedRadio(): void {
    console.log(this.taskForm.get('onlineOrPhone').value);
  }

}
