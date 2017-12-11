import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private projectName: string;
  private projects: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  private addProject(): void {
    this.projects.push(this.projectName);
  }

  private deleteProject(project: string): void {
    let index = this.projects.indexOf(project);
    if (index > -1) {
      this.projects.splice(index, 1);
    }
  }

}
