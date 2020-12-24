import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthtabComponent } from './healthtab.component';

describe('HealthtabComponent', () => {
  let component: HealthtabComponent;
  let fixture: ComponentFixture<HealthtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
