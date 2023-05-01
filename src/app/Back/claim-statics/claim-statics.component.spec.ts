import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimStaticsComponent } from './claim-statics.component';

describe('ClaimStaticsComponent', () => {
  let component: ClaimStaticsComponent;
  let fixture: ComponentFixture<ClaimStaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimStaticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
