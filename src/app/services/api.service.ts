import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Time
  time_API_KEY: string = "2ejdt5yPseakEwmw7UwGvne9wmjyAv";

  // Weather
  API_KEY: string = "&appid=b272bf8076e56605d8cc85b7e6106612";
  baseURL: string = "http://api.openweathermap.org/data/2.5/";
  weather: string = "weather?q=";
  onecall: string = "https://api.openweathermap.org/data/2.5/onecall?";
  conditionImgBaseURL: string = "http://openweathermap.org/img/wn/";



  constructor(private _http: HttpClient) { }

  // Time
  getCurrentTime(location: string) {
    return this._http.get<any>("https://www.amdoren.com/api/timezone.php?api_key=" + this.time_API_KEY + "&loc=" + location).pipe(catchError(this.errorHandler));
  }

  // API Calls
  getCurrentWeather(location: string) {
    return this._http.get<any>(this.baseURL + this.weather + location + this.API_KEY).pipe(catchError(this.errorHandler));
  }

  getOneCallReport(lat: string, lon: string) {
    return this._http.get<any>(this.onecall + "lat=" + lat + "&lon=" + lon + this.API_KEY);
  }

  getWeatherCondition(imageID: string) {
    return this.conditionImgBaseURL + imageID + "@2x.png";
  }

  kelvinToCelcius(kelvin: number) {
    return Math.round(kelvin - 273.15);
  }

  kelvinToFahrenheit(kelvin: number) {
    return Math.round(1.8 * (kelvin - 273) + 32);
  }

  getCountryFlag(countryCode: string) {
    return "https://www.countryflags.io/" + countryCode.toLowerCase() + "/flat/64.png";
  }


  errorHandler(error: HttpErrorResponse) {
    return throwError(error || error.error['msg'] || 'SERVER ERROR');
  }
}
