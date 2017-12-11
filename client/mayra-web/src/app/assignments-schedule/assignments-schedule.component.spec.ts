import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsScheduleComponent } from './assignments-schedule.component';

describe('AssignmentsScheduleComponent', () => {
  let component: AssignmentsScheduleComponent;
  let fixture: ComponentFixture<AssignmentsScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentsScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
