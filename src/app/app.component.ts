import { Component } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from
  '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent {
  title = 'weather-app';
  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;
  map!: google.maps.Map;
public textualAddress:string="";
//public result:string="";
  lat = 40.73061;
  //lat!:number
  lng = -73.935242;
  //lng!:number
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
    scaleControl: true
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    animation: google.maps.Animation.BOUNCE,
    draggable: true
  });

  ngAfterViewInit() {
    this.mapInitializer();
    this.marker.addListener('dragend', (coords) => {
      this.onLocationChanged(coords);
    });
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }

  setMapCoordinates(place: any) {
    console.log(place);
    this.coordinates = new google.maps.LatLng(place.lat, place.lng);
    this.marker.setPosition(this.coordinates);
    this.map.setCenter(this.coordinates);
  }
  
  onLocationChanged($event: any): void {
    let geocoder: google.maps.Geocoder = new google.maps.Geocoder();
    let request: google.maps.GeocoderRequest = {
      location: $event.latLng,
    };
    geocoder.geocode(request, (response, status) => {
      if (status.toString() == "OK") {
        var place = response[0];
        console.log(place);
        var lat = place.geometry.location.lat();
        var lng = place.geometry.location.lng();
        console.log(lat);
        console.log(lng);
      this.textualAddress= place.formatted_address;
        console.log(this.textualAddress);
       // this.city=formattedAddress;
        /* this.form.get('location').setValue({
           formattedAddress:formattedAddress,
           lat:lat,
           lng:lng
         });*/
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
    );
  }
/*  parentFun(value:any){
   this.result=value;
  }*/
}


