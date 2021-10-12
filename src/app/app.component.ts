import { Component } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from 
  '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  @ViewChild('mapContainer', {static: false}) gmap!: ElementRef;
  map!: google.maps.Map;

    lat = 40.73061;
    //lat!:number
    lng = -73.935242;
    //lng!:number
    coordinates = new google.maps.LatLng(this.lat, this.lng);
    mapOptions: google.maps.MapOptions = {
     center: this.coordinates,
     zoom: 8
    };
    marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
      animation: google.maps.Animation.DROP
    });
    ngAfterViewInit() {
      this.mapInitializer();
    }
    mapInitializer() {
      this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
      this.marker.setMap(this.map);
    }
    setMapCoordinates(place:any){
      console.log(place);
      this.coordinates = new google.maps.LatLng(place.lat, place.lng);
      this.marker.setPosition(this.coordinates);
      this.map.setCenter(this.coordinates);

    }
}


