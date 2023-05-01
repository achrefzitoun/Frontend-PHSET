import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App0FrontComponent } from './app0-front.component';

describe('App0FrontComponent', () => {
  let component: App0FrontComponent;
  let fixture: ComponentFixture<App0FrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App0FrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App0FrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
