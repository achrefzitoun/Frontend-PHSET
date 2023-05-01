import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCQQuestionsComponent } from './mcq-questions.component';

describe('MCQQuestionsComponent', () => {
  let component: MCQQuestionsComponent;
  let fixture: ComponentFixture<MCQQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCQQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MCQQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
