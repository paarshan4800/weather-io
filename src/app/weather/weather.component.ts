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

    /*
  this._api.getCurrentWeather(this.form.value.location).subscribe(
    (data) => {
      this.cityNotFound = false;
      this.currentReport = data;
      this.currentReport.dt = this.currentReport.dt * 1000;
      this.currentReport.sys.sunrise = this.currentReport.sys.sunrise * 1000;
      this.currentReport.sys.sunset = this.currentReport.sys.sunset * 1000;
      this.currentReport['conditionImg'] = this._api.getWeatherCondition(this.currentReport.weather[0].icon);
      this.currentReport['celcius'] = {
        "current": this._api.kelvinToCelcius(this.currentReport.main.temp),
        "feels_like": this._api.kelvinToCelcius(this.currentReport.main.feels_like),
        "high": this._api.kelvinToCelcius(this.currentReport.main.temp_max),
        "low": this._api.kelvinToCelcius(this.currentReport.main.temp_min)
      };
      this.currentReport['fahrenheit'] = {
        "current": this._api.kelvinToFahrenheit(this.currentReport.main.temp),
        "feels_like": this._api.kelvinToFahrenheit(this.currentReport.main.feels_like),
        "high": this._api.kelvinToFahrenheit(this.currentReport.main.temp_max),
        "low": this._api.kelvinToFahrenheit(this.currentReport.main.temp_min)
      };
      this.currentReport['countryFlag'] = this._api.getCountryFlag(this.currentReport.sys.country);
      this.currentReport.visibility = (this.currentReport.visibility / 1000).toPrecision(3);
      this.currentReport.wind.speed = (this.currentReport.wind.speed * 3.6).toPrecision(2);

      this._api.getCurrentTime(this.form.value.location).subscribe((data) => {
        console.log("TIME", data);
      },
        (error) => {
          console.log(error);
        })


      this._api.getOneCallReport(data.coord.lat, data.coord.lon).subscribe((data) => {
        this.oneCallReport = data;
        this.hourly = [];
        this.daily = [];
        if (this.oneCallReport) {
          for (let i = 1; i <= 7; i++) {
            this.hourly.push(this.oneCallReport.hourly[i]);
            this.daily.push(this.oneCallReport.daily[i]);
          }
          for (let i = 0; this.hourly.length; i++) {
            // Hourly Conversions
            this.hourly[i].dt = this.hourly[i].dt * 1000;
            this.hourly[i]["celcius"] = {
              "current": this._api.kelvinToCelcius(this.hourly[i].temp),
              "feels_like": this._api.kelvinToCelcius(this.hourly[i].feels_like),
            }
            this.hourly[i]["fahrenheit"] = {
              "current": this._api.kelvinToFahrenheit(this.hourly[i].temp),
              "feels_like": this._api.kelvinToFahrenheit(this.hourly[i].feels_like),
            }
            this.hourly[i]["conditionImg"] = this._api.getWeatherCondition(this.hourly[i].weather[0].icon);
            this.hourly[i].visibility = (this.hourly[i].visibility / 1000).toPrecision(3);
            this.hourly[i].wind_speed = (this.hourly[i].wind_speed * 3.6).toPrecision(2);

            // Daily Conversions
            this.daily[i].dt = this.daily[i].dt * 1000;
            this.daily[i]["celcius"] = {
              "day": this._api.kelvinToCelcius(this.daily[i].temp.day),
              "night": this._api.kelvinToCelcius(this.daily[i].temp.night),
              "feels_like_day": this._api.kelvinToCelcius(this.daily[i].feels_like.day),
              "feels_like_night": this._api.kelvinToCelcius(this.daily[i].feels_like.night),
            }
            this.daily[i]["fahrenheit"] = {
              "day": this._api.kelvinToFahrenheit(this.daily[i].temp.day),
              "night": this._api.kelvinToFahrenheit(this.daily[i].temp.night),
              "feels_like_day": this._api.kelvinToFahrenheit(this.daily[i].feels_like.day),
              "feels_like_night": this._api.kelvinToFahrenheit(this.daily[i].feels_like.night),
            }
            this.daily[i]["conditionImg"] = this._api.getWeatherCondition(this.daily[i].weather[0].icon);
            this.daily[i].wind_speed = (this.daily[i].wind_speed * 3.6).toPrecision(2);
          }
        }

      },
        (error) => {
          console.log(error);
        })


    },
    (error) => {
      console.log(error.error);
      if (error.error.cod === "404") {
        this.cityNotFound = true;
        this.currentReport = null;
      }
    }
  );
*/

  }

}
