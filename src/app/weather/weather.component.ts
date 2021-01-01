import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  form = this.formBuilder.group({
    location: [''],
  });

  cityNotFound: boolean;

  currentReport: any;
  locationDetails: any;
  hourly;
  daily;

  constructor(private formBuilder: FormBuilder, private _api: ApiService) {
  }

  ngOnInit(): void {
    this.currentReport = null;
    this.cityNotFound = false;
    this.hourly = null;
    this.daily = null;
  }

  searchLocation() {
    this._api.getWeather(this.form.value.location).subscribe(
      (data) => {
        this.cityNotFound = false;
        this.currentReport = data.current;
        this.currentReport['astro'] = data.forecast.forecastday[0].astro;
        this.currentReport['day'] = data.forecast.forecastday[0].day;
        this.locationDetails = data.location;
        this.hourly = [];
        this.daily = [];
        for (let i = 0; i < data.forecast.forecastday.length; i++) {
          this.daily.push({
            "date": data.forecast.forecastday[i].date,
            "date_epoch": data.forecast.forecastday[i].date_epoch,
            "day": data.forecast.forecastday[i].day,
            "astro": data.forecast.forecastday[i].astro,
          });
        }
        for (let i = 0; i < data.forecast.forecastday[0].hour.length; i++) {
          this.hourly.push(data.forecast.forecastday[0].hour[i]);
        }
      },
      (error) => {
        if (error.error.error.code === 1006) {
          this.cityNotFound = true;
          this.currentReport = null;
        }
      })
  }

}
