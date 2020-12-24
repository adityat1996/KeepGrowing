import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingFaceComponent } from './grooming-face.component';

describe('GroomingFaceComponent', () => {
  let component: GroomingFaceComponent;
  let fixture: ComponentFixture<GroomingFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
