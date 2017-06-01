import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSessionComponent } from './event-session.component';

describe('EventSessionComponent', () => {
  let component: EventSessionComponent;
  let fixture: ComponentFixture<EventSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
