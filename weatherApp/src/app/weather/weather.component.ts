import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  City: String;
  Humidity: Number;
  TempAverage: Number;
  TempMax: Number;
  TempMin: Number;
  Status: String;
  zipCode: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.showWeather();
  }
  showWeather() {
    const seattleObservable = this._httpService.getWeather(this.zipCode);
    seattleObservable.subscribe(data => {
      console.log(data);
      this.City = data['name'];
      this.Humidity = data['main']['humidity'];
      this.TempAverage = this.Farenheit(data['main']['temp']);
      this.TempMax = this.Farenheit(data['main']['temp_max']);
      this.TempMin = this.Farenheit(data['main']['temp_min']);
      this.Status = data['weather'][0]['description'];
    });
  }
  Farenheit(temp) {
    const Farenheit = Math.floor((temp) * 9 / 5 - 459.67);
    return Math.round(Farenheit);
  }

}
