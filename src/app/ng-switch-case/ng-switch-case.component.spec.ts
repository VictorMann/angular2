import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchCaseComponent } from './ng-switch-case.component';

describe('NgSwitchCaseComponent', () => {
  let component: NgSwitchCaseComponent;
  let fixture: ComponentFixture<NgSwitchCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
