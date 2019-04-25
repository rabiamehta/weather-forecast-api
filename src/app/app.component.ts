import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  conditional: boolean;
  cityName: string;
  currdate: string;
  icon: string;
  desc: string;
  temp: number;
  humidity: number;
  min_temp: number;
  max_temp: number;
  wind: number;
  result: any = [];
  report: any = [];
  parentData
  constructor(private ws: WeatherService) {
  this.conditional = false;
  }


  onSubmit(WeatherForm: NgForm) {
    this.report = [];
    this.conditional = true;

    this.ws.getWeather(WeatherForm.value.location).subscribe((data) => {
      console.log(data)
      this.result = data['list'];
      for (let i = 0; i < this.result.length; i = i + 8) {
        this.report.push(this.result[i]);
      }
      console.log(data['list'][0]['dt'])
      this.cityName = data['city']['name']
      this.currdate = data['list'][0]['dt_txt']
      this.desc = data['list'][0]['weather'][0]['main']
      this.icon = data['list'][0]['weather'][0]['icon']
      this.temp = data['list'][0]['main']['temp'] - 273.15
      this.min_temp = data['list'][0]['main']['temp_min'] - 273.15
      this.max_temp = data['list'][0]['main']['temp_max'] - 273.15
      this.humidity = data['list'][0]['main']['humidity'] - 273.15
      this.wind = data['list'][0]['wind']['speed']
      this.parentData = this.report;
      console.log(this.parentData[0])
    })

    // this.ws.get();
  }
}
