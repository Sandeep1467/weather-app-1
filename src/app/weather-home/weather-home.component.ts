import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { WeatherClientService } from '../weather-client.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  //public weatherSearchForm: FormGroup |any ;
 public  city:string="city";
weather:any

  constructor(private weatherClient:WeatherClientService) { }

  ngOnInit(): void {
    
    
    }
    getWeather(){
      this.weatherClient.getData(this.city).subscribe(data=>{this.weather=data

        console.log(this.weather);
      })
    }
    
  }


