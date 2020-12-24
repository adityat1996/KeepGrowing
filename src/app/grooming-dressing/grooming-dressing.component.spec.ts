import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingDressingComponent } from './grooming-dressing.component';

describe('GroomingDressingComponent', () => {
  let component: GroomingDressingComponent;
  let fixture: ComponentFixture<GroomingDressingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingDressingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingDressingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
