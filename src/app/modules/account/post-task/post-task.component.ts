import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TheErrorStateMatcher} from '../../../core/utils/errorMatcher';

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss']
})
export class PostTaskComponent implements OnInit {
  isLinear = true;
  taskForm: FormGroup;
  matcher = new TheErrorStateMatcher();
  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.taskForm = this._formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      onlineOrPhone: [false],
      totalOrHourly: [true]
    });
  }

  getSelectedRadio(): void {
    console.log(this.taskForm.get('onlineOrPhone').value);
  }

}
