import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIoComponent } from './weather-io.component';

describe('WeatherIoComponent', () => {
  let component: WeatherIoComponent;
  let fixture: ComponentFixture<WeatherIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherIoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
