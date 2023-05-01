import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillSubjectComponent } from './fill-subject.component';

describe('FillSubjectComponent', () => {
  let component: FillSubjectComponent;
  let fixture: ComponentFixture<FillSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
