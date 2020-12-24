import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingPoseComponent } from './grooming-pose.component';

describe('GroomingPoseComponent', () => {
  let component: GroomingPoseComponent;
  let fixture: ComponentFixture<GroomingPoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingPoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingPoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
