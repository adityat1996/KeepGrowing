import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationalphotosComponent } from './motivationalphotos.component';

describe('MotivationalphotosComponent', () => {
  let component: MotivationalphotosComponent;
  let fixture: ComponentFixture<MotivationalphotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivationalphotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationalphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
