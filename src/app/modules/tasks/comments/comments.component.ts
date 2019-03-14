import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as Loading from '../../../store/actions/loading.actions';
import {TaskService} from '../../../core/services/task.service';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../store/reducers/app.reducer';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments;
  commentForm: FormGroup;
  isReplyVisible = false;
  constructor(
    public formBuilder: FormBuilder,
    private _taskService: TaskService,
    private store: Store<fromRoot.State>,
  ) {
    this.createForm();
  }

  toggleReply(): void {
    this.isReplyVisible = !this.isReplyVisible;
  }
  createForm() {
    this.commentForm = this.formBuilder.group({
      commentText: ['', [Validators.required]],
    });
  }

  reply(id): void {
    if (this.commentForm.valid) {
      this.store.dispatch(new Loading.ShowLoading());
      this._taskService.postComment(id, this.commentForm).subscribe(res => {
        this.store.dispatch(new Loading.HideLoading());
        console.log(res);
      });
    }
  }

  ngOnInit() {
  }

}
