import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsExcelComponent } from './claims-excel.component';

describe('ClaimsExcelComponent', () => {
  let component: ClaimsExcelComponent;
  let fixture: ComponentFixture<ClaimsExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
