import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocktComponent } from './sockt.component';

describe('SocktComponent', () => {
  let component: SocktComponent;
  let fixture: ComponentFixture<SocktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
