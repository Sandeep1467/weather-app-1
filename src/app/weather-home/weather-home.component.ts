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
 

  constructor(private weatherClient:WeatherClientService) { }

  ngOnInit(): void {
    this.weatherClient.getData().subscribe(data=>{
      console.log(data);
    })
    
    }
    
  }


//private formBuilder: FormBuilder
