import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCreateButtonComponent } from './poll-create-button.component';

describe('PollCreateButtonComponent', () => {
  let component: PollCreateButtonComponent;
  let fixture: ComponentFixture<PollCreateButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollCreateButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCreateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
