import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiThematicComponent } from './edi-thematic.component';

describe('EdiThematicComponent', () => {
  let component: EdiThematicComponent;
  let fixture: ComponentFixture<EdiThematicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiThematicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiThematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
