import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  task: Task;

  constructor() { }

  ngOnInit() {
    this.task = new Task({ id: "1276348612", name: "Test task", description: "Description of this task" });
    this.task.subtasks = [
      new Task({ id: "1276348612", name: "Sub task 1", description: "Description of sub task 1" }),
      new Task({ id: "5352345", name: "Sub task 2", description: "Description of sub task 2" }),
      new Task({ id: "23452345345", name: "Sub task 3", description: "Description of sub task 3" })
    ];
  }

}
