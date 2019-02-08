import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../core/services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'app/store/models/task.model';
import {ITask} from '../../../store/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  isLoading = true;
  selectedTask: Task;
  tasks: Task[];
  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute) {
  }

  viewTask(task: Task): void {
    this.isLoading = true;
    this.taskService.getTask(task.slug).subscribe((t: Task) => {
      this.selectedTask = t;
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.isLoading = false;
      this.tasks = data['tasks'].data;
    });
  }
}
