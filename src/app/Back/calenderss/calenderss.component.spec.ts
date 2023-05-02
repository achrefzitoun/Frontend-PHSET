import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderssComponent } from './calenderss.component';

describe('CalenderssComponent', () => {
  let component: CalenderssComponent;
  let fixture: ComponentFixture<CalenderssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
