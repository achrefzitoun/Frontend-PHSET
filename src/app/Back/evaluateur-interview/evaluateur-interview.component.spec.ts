import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateurInterviewComponent } from './evaluateur-interview.component';

describe('EvaluateurInterviewComponent', () => {
  let component: EvaluateurInterviewComponent;
  let fixture: ComponentFixture<EvaluateurInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateurInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateurInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
