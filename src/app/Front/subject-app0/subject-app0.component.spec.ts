import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectApp0Component } from './subject-app0.component';

describe('SubjectApp0Component', () => {
  let component: SubjectApp0Component;
  let fixture: ComponentFixture<SubjectApp0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectApp0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectApp0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
