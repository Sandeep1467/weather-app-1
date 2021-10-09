import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { WeatherClientService } from '../weather-client.service';
<<<<<<< HEAD
=======
//import {  AfterViewInit, ViewChild, ElementRef } from 
'@angular/core';
>>>>>>> 2609f09223e554bc6cbf3bb08f8161031ce79865

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

