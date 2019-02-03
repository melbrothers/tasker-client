import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  selectedTask: any;
  tasks: Array<object>;
  constructor(private taskService: TaskService) { }

  viewTask(task): void {
    // get task details
    // TODO: need a task model to type the returned data
    this.taskService.getTask(task.slug).subscribe((t: any) => {
      this.selectedTask = t.data;
    });
  }

  ngOnInit() {
    this.taskService.listTasks().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks.data;
      if (tasks.data && tasks.data.length > 0) {
        this.selectedTask = tasks.data[0];
      }
    });
  }

}
