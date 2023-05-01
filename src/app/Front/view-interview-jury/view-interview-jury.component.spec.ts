import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInterviewJuryComponent } from './view-interview-jury.component';

describe('ViewInterviewJuryComponent', () => {
  let component: ViewInterviewJuryComponent;
  let fixture: ComponentFixture<ViewInterviewJuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInterviewJuryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInterviewJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
