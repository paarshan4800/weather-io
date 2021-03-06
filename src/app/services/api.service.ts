import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // Weather
  API_KEY: string = "03a192d4414544278ed104648210101";
  baseURL: string = "https://api.weatherapi.com/v1/forecast.json?key=";

  constructor(private _http: HttpClient) { }


  // API Calls
  getWeather(location: string) {
    return this._http.get<any>(this.baseURL + this.API_KEY + "&q=" + location + "&days=7").pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error || error.error['msg'] || 'SERVER ERROR');
  }
}
