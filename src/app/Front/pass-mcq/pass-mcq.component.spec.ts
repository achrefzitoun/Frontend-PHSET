import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassMcqComponent } from './pass-mcq.component';

describe('PassMcqComponent', () => {
  let component: PassMcqComponent;
  let fixture: ComponentFixture<PassMcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassMcqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
