import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecissionClaimComponent } from './decission-claim.component';

describe('DecissionClaimComponent', () => {
  let component: DecissionClaimComponent;
  let fixture: ComponentFixture<DecissionClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecissionClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecissionClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
