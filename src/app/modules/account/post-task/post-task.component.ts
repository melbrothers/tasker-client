import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss']
})
export class PostTaskComponent implements OnInit {
  isLinear = true;
  taskFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.taskFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

}
