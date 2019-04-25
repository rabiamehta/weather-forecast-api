import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class WeatherService {
  url:string='http://api.openweathermap.org/data/2.5/forecast';
  APIkey:string='cc1366f27f4b809ab57afaccf57e78fd';

  constructor(private http:HttpClient) {}

  // get(){
  //   console.log("Hi i am here");
  //   return this.http.get("/employee");
  // }



  getWeather(location:string)
  {
    return this.http.get(`${this.url}?q=${location}&APPID=${this.APIkey}`,{responseType:'json'});
  }
}
