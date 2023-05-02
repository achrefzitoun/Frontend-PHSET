import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTasksAndEvaluationComponent } from './add-tasks-and-evaluation.component';

describe('AddTasksAndEvaluationComponent', () => {
  let component: AddTasksAndEvaluationComponent;
  let fixture: ComponentFixture<AddTasksAndEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTasksAndEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTasksAndEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
