import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatReservComponent } from './stat-reserv.component';

describe('StatReservComponent', () => {
  let component: StatReservComponent;
  let fixture: ComponentFixture<StatReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatReservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
