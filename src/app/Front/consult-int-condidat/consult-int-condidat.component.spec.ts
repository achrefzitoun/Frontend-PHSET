import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultIntCondidatComponent } from './consult-int-condidat.component';

describe('ConsultIntCondidatComponent', () => {
  let component: ConsultIntCondidatComponent;
  let fixture: ComponentFixture<ConsultIntCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultIntCondidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultIntCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
