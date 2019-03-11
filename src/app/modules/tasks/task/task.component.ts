import {Component, Input, OnInit} from '@angular/core';
import { Task } from 'app/store/models/task.model';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Store} from '@ngrx/store';
import {RequestTask} from '../../../store/actions/task.actions';
import {TaskFilterDialogComponent} from '../task-filter-dialog/task-filter-dialog.component';
import {BidComponent} from '../bid/bid.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  isFollowed: boolean;
  currentRate: number;
  currentCompletedRate: number;
  rateCount: number;
  taskQuestionsCount: number;
  inputCountForQuestion = 1500;
  constructor(
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private bidDialogRef: MatDialog, private store: Store<Task>, private activatedRoute: ActivatedRoute) {
  iconRegistry.addSvgIcon(
  'fb-logo',
  sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/facebook-logo.svg'));
  iconRegistry.addSvgIcon(
  'twitter-logo',
  sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/twitter-logo.svg'));
  iconRegistry.addSvgIcon(
      'google-plus',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/google-plus.svg'));
  iconRegistry.addSvgIcon(
    'linkedin',
    sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/linkedin-logo.svg'));
  iconRegistry.addSvgIcon(
    'wechat',
    sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/wechat-logo.svg'));
  }

  viewOnMap(): void {
    const queryParams = this.task.location.display_name.replace(/\s+/g, '+');
    const queryUrl = `https://www.google.com/maps/search/?api=1&query=${queryParams}`;
    const win = window.open(queryUrl, '_blank');
    win.focus();
  }
  openBid(): void {
    this.bidDialogRef.open(BidComponent, {
      width: '50vw',
      height: 'auto',
      data: {
        slug: this.task.slug,
      },
    });
  }
  ngOnInit() {
    this.isFollowed = false;
    this.rateCount = 47;
    this.currentCompletedRate = 8 / 10 * 100;
    this.taskQuestionsCount = 3;
    console.log(this.task);
    this.store.dispatch(new RequestTask({taskId: this.task.id}));
    // this.task.deadline = moment(this.task.deadline).format('dddd, Do of MMM YYYY');
  }

}
