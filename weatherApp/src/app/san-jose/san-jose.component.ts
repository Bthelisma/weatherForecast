import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  City: String;
  Humidity: Number;
  TempAverage: Number;
  TempMax: Number;
  TempMin: Number;
  Status: String;


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.showSanJose();
  }
  showSanJose() {
    const sanjoseObservable = this._httpService.getSanJose();
    sanjoseObservable.subscribe(data => {
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
