import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAndHourlyCardComponent } from './daily-and-hourly-card.component';

describe('DailyAndHourlyCardComponent', () => {
  let component: DailyAndHourlyCardComponent;
  let fixture: ComponentFixture<DailyAndHourlyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyAndHourlyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAndHourlyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
