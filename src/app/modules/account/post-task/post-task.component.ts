import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TheErrorStateMatcher} from '../../../core/utils/errorMatcher';

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss'],
})
export class PostTaskComponent implements OnInit {
  isLinear = true;
  taskForm: FormGroup;
  matcher = new TheErrorStateMatcher();
  selectedSuburb = {
    display_name: null,
    longitude: 0,
    lantitude: 0
  };
  deadline = new Date();
  isCertainDay = false;
  constructor(private _formBuilder: FormBuilder) {
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
