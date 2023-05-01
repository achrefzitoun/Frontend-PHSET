import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimYearReportComponent } from './claim-year-report.component';

describe('ClaimYearReportComponent', () => {
  let component: ClaimYearReportComponent;
  let fixture: ComponentFixture<ClaimYearReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimYearReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimYearReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
