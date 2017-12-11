import { Component, OnInit, Input } from '@angular/core';
import { findWires } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-assignments-schedule',
  templateUrl: './assignments-schedule.component.html',
  styleUrls: ['./assignments-schedule.component.css']
})
export class AssignmentsScheduleComponent implements OnInit {

  private _users: any[] = [];
  private _tasks: any[] = [];
  private _startDate: Date;
  private _finishDate: Date;
  private _assignments: any;
  private dates: string[] = [];
  private hello: string = "world";

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set users(users: any[]) {
    this._users = users;
    this.refreshAssignmentsGrid();
  }
  @Input()
  set tasks(tasks: any[]) {
    this._tasks = tasks;
    this.refreshAssignmentsGrid();
  }
  @Input("start-date")
  set startDate(startDate: Date) {
    this._startDate = startDate;
    this.refreshDates();
  }
  @Input("finish-date")
  set finishDate(finishDate: Date) {
    this._finishDate = finishDate;
    this.refreshDates();
  }
  @Input()
  set assignments(assignments: any) {
  }

  private refreshDates(): void {
    if (!this._startDate || !this._finishDate) return;
    this.dates = this.getDates(this._startDate, this._finishDate);
    this.refreshAssignmentsGrid();
  }

  private addDays(date: Date, days: number): Date {
    var date = new Date(date.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  private getDates(startDate, finishDate): string[] {
    var dateArray = [];
    var currentDate = startDate;
    while (currentDate <= finishDate) {
      var newDate = new Date(currentDate);
      var day = newDate.getDate();
      var month = newDate.getMonth() + 1;
      var year = newDate.getFullYear();
      dateArray.push(day + '/' + month + '/' + year);
      currentDate = this.addDays(currentDate, 1);
    }
    return dateArray;
  }

  private refreshAssignmentsGrid(): void {
    if (!this._tasks || !this._startDate || !this._finishDate || !this._users) return;
    this._assignments = [];
    this._tasks.forEach(task => this._users.forEach(user => this.dates.forEach(date => {
      if (!this._assignments[date]) {
        this._assignments[date] = [];
      }
      if (!this._assignments[date][user.id]) {
        this._assignments[date][user.id] = [];
      }
      this._assignments[date][user.id][task.id] = 0;
    })));
    console.log(this._assignments);
  }

  private getRemainingAssignmentForTask(task: any): number {
    let result: number = task.estimated;
    this._users.forEach(user => this.dates.forEach(date => result -= +this._assignments[date][user.id][task.id]));
    return result;
  }

}
