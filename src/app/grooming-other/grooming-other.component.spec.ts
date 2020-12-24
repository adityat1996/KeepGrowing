import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingOtherComponent } from './grooming-other.component';

describe('GroomingOtherComponent', () => {
  let component: GroomingOtherComponent;
  let fixture: ComponentFixture<GroomingOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
