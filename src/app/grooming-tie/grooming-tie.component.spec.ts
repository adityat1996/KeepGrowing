import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingTieComponent } from './grooming-tie.component';

describe('GroomingTieComponent', () => {
  let component: GroomingTieComponent;
  let fixture: ComponentFixture<GroomingTieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingTieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingTieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
