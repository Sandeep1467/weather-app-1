import { Component, OnInit } from '@angular/core';
import { WeatherClientService } from '../weather-client.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {

  constructor(private weatherClient:WeatherClientService) { }

  ngOnInit(): void {
    this.weatherClient.getData().subscribe(data=>{
      console.log(data);
      console.log(data.weatherApi.sys.id);
    })

  }

}
