import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTasksAndEvaluationsComponent } from './view-tasks-and-evaluations.component';

describe('ViewTasksAndEvaluationsComponent', () => {
  let component: ViewTasksAndEvaluationsComponent;
  let fixture: ComponentFixture<ViewTasksAndEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTasksAndEvaluationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTasksAndEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
