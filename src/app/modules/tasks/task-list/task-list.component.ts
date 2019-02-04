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
  selectedTask: Task;
  tasks: Task[];
  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute) { }

  viewTask(task: Task): void {
    // get task details
    // TODO: need a task model to type the returned data
    this.taskService.getTask(task.slug).subscribe((t: any) => {
      this.selectedTask = t.data;
    });
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.tasks = data['tasks'].data;
      if (this.tasks.length > 0) {
        this.selectedTask = this.tasks[0];
      }
    });
  }

}
