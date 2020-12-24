import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDailyComponent } from './watch-daily.component';

describe('WatchDailyComponent', () => {
  let component: WatchDailyComponent;
  let fixture: ComponentFixture<WatchDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
