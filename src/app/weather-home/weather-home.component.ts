import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscriber } from 'rxjs';
import { WeatherClientService } from '../weather-client.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  @Output() newCoord = new EventEmitter<any>();
  newCoordinates(value: any) {
    this.newCoord.emit(value);
  }

  public city: string = "";
  weather: any


  constructor(private weatherClient: WeatherClientService) { }

  ngOnInit(): void {

  }
  getWeather() {
    this.weatherClient.getData(this.city).subscribe(data => {
      this.weather = data
      console.log(this.weather);
      this.newCoordinates({ lat: this.weather.coord.lat, lng: this.weather.coord.lon })
    })
  }
}

