import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisureEventComponent } from './leisure-event.component';

describe('LeisureEventComponent', () => {
  let component: LeisureEventComponent;
  let fixture: ComponentFixture<LeisureEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeisureEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeisureEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
