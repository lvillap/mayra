import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments-page',
  templateUrl: './assignments-page.component.html',
  styleUrls: ['./assignments-page.component.css']
})
export class AssignmentsPageComponent implements OnInit {

  private users = [ { id: 1, name: "Victor" }, { id: 2, name: "Luis"} ];
  private tasks = [ { id: 1, name: "Task 1", estimated: 12.2 }, { id: 2, name: "Task 2", estimated: 8.5 } ];
  private startDate = new Date("October 13, 2017 11:13:00");
  private finishDate = new Date("November 13, 2017 11:13:00");
  private assignments = {};

  constructor() { }

  ngOnInit() {
  }

}
