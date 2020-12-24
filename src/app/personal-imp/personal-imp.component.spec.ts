import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalImpComponent } from './personal-imp.component';

describe('PersonalImpComponent', () => {
  let component: PersonalImpComponent;
  let fixture: ComponentFixture<PersonalImpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalImpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
