import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelibNoteComponent } from './delib-note.component';

describe('DelibNoteComponent', () => {
  let component: DelibNoteComponent;
  let fixture: ComponentFixture<DelibNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelibNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelibNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
