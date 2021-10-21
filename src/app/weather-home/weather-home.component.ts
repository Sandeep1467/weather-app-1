 /// <reference  types="@types/googlemaps"  />
import { Component, EventEmitter, OnInit, Output, ViewChild,ElementRef, AfterViewInit, NgZone, Input} from '@angular/core';
import { Subscriber } from 'rxjs';
import { WeatherClientService } from '../weather-client.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  @ViewChild('addresstext', {static: false}) addresstext!:  ElementRef;
  @Output() newCoord = new EventEmitter<any>();
  newCoordinates(value: any) {
    this.newCoord.emit(value);
  }

  @Input() city: string = "";
  weather: any


  constructor(private weatherClient: WeatherClientService,private ngZone: NgZone) { }

  ngOnInit(): void {

  }
  ngAfterViewInit():  void {
    this.googlePlaceAutoCompleteAttach();
  }
  private googlePlaceAutoCompleteAttach():void {
    let autocomplete =
    new google.maps.places.Autocomplete(this.addresstext.nativeElement, { types: ["(cities)"] });
    autocomplete.addListener("place_changed",
    () => {
      this.ngZone.run(() => {
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        if (place.geometry === undefined || place.geometry === null) {
          return;
        } else {
          console.log(place);
          // this.address = place.formatted_address;
          // this.lat = place.geometry.location.lat();
          // this.lng = place.geometry.location.lng();
          // this.marker.setPosition(new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng()));
          // this.map.setCenter(new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng()));
        }
      });
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

