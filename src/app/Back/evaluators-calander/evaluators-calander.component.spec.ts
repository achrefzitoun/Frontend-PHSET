import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorsCalanderComponent } from './evaluators-calander.component';

describe('EvaluatorsCalanderComponent', () => {
  let component: EvaluatorsCalanderComponent;
  let fixture: ComponentFixture<EvaluatorsCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluatorsCalanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorsCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
