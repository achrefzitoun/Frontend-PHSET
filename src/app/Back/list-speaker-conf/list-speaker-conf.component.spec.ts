import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpeakerConfComponent } from './list-speaker-conf.component';

describe('ListSpeakerConfComponent', () => {
  let component: ListSpeakerConfComponent;
  let fixture: ComponentFixture<ListSpeakerConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSpeakerConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpeakerConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
