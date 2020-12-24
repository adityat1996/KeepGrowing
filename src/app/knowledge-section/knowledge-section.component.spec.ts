import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeSectionComponent } from './knowledge-section.component';

describe('KnowledgeSectionComponent', () => {
  let component: KnowledgeSectionComponent;
  let fixture: ComponentFixture<KnowledgeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
