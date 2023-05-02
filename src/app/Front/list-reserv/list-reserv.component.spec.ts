import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservComponent } from './list-reserv.component';

describe('ListReservComponent', () => {
  let component: ListReservComponent;
  let fixture: ComponentFixture<ListReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
