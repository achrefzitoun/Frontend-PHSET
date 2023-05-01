import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGridEvaluationComponent } from './view-grid-evaluation.component';

describe('ViewGridEvaluationComponent', () => {
  let component: ViewGridEvaluationComponent;
  let fixture: ComponentFixture<ViewGridEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGridEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGridEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
