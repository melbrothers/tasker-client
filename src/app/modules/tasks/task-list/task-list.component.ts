import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Array<object>;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.listTasks().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks.data;
    });
  }

}
