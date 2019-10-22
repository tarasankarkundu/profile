import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBreakupComponent } from './activity-breakup.component';

describe('ActivityBreakupComponent', () => {
  let component: ActivityBreakupComponent;
  let fixture: ComponentFixture<ActivityBreakupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityBreakupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityBreakupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
