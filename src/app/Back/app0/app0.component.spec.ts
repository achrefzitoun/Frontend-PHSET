import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP0Component } from './app0.component';

describe('APP0Component', () => {
  let component: APP0Component;
  let fixture: ComponentFixture<APP0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APP0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APP0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
