import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneClaimComponent } from './view-one-claim.component';

describe('ViewOneClaimComponent', () => {
  let component: ViewOneClaimComponent;
  let fixture: ComponentFixture<ViewOneClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
