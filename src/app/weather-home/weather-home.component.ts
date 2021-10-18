 /// <reference  types="@types/googlemaps"  />
import { Component, EventEmitter, OnInit, Output, ViewChild,ElementRef, AfterViewInit} from '@angular/core';
import { Subscriber } from 'rxjs';
import { WeatherClientService } from '../weather-client.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  @ViewChild('addresstext', {static: false}) #addresstext!:  ElementRef;
  @Output() newCoord = new EventEmitter<any>();
  newCoordinates(value: any) {
    this.newCoord.emit(value);
  }
 
  public city: string = "";
  weather: any


  constructor(private weatherClient: WeatherClientService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit():  void {
    this.getPlaceAutocomplete();
  }
  getPlaceAutocomplete() {
    const autocomplete  =  new  google.maps.places.Autocomplete(this.#addresstext.nativeElement,
    {
      componentRestrictions: { country:  'US' },
      types: ['establishment', 'geocode'] 
  
    });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place  =  autocomplete.getPlace();
      console.log(place);
    });
  }
  getWeather() {
    this.weatherClient.getData(this.city).subscribe(data => {
      this.weather = data
      console.log(this.weather);
      this.newCoordinates({ lat: this.weather.coord.lat, lng: this.weather.coord.lon })
    })
  }
}

