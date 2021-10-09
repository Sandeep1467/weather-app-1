import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { WeatherClientService } from '../weather-client.service';
import {  AfterViewInit, ViewChild, ElementRef } from 
'@angular/core';
//import { } from '@types/googlemaps';
import {} from '@agm/core/services/google-maps-types';
@ViewChild('mapContainer', {static: false}) gmap: ElementRef;
@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  
  public city: string = "";
  weather: any

  constructor(private weatherClient: WeatherClientService) { }

  ngOnInit(): void {


  }
  getWeather() {
    this.weatherClient.getData(this.city).subscribe(data => {
      this.weather = data
      console.log(this.weather);
    })
  }

}

