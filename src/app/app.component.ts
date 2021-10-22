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
  public textualAddress: string = "";
  //public result:string="";
  lat = 40.73061;
  //lat!:number
  lng = -73.935242;
  //lng!:number
  orginMarker = new google.maps.Marker({
    //position: this.coordinates,
    map: this.map,
    animation: google.maps.Animation.BOUNCE,
    //
  });
  destinationMarker = new google.maps.Marker({
    //position: this.coordinates,
    map: this.map,
    animation: google.maps.Animation.BOUNCE,
    //
  });

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
        this.textualAddress = place.formatted_address;
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
  showOrigin(value: any) {
    this.orginMarker.setPosition(new google.maps.LatLng(value.lat, value.lng))
  }
  showDestination(value: any) {
    this.destinationMarker.setPosition(new google.maps.LatLng(value.lat, value.lng))
  }
  public calculateAndDisplayDistanceAndDuration() {
    let origin = this.orginMarker.getPosition();
    console.log(origin);
    let destination = this.destinationMarker.getPosition();
    console.log(destination);
    let directionsService: google.maps.DirectionsService = new google.maps.DirectionsService();
    let request: google.maps.DirectionsRequest = {
      origin: new google.maps.LatLng(origin.lat(), origin.lng()),
      destination: new google.maps.LatLng(destination.lat(), destination.lng()),
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    };
    directionsService.route(request, (response, status) => {
      if (status.toString() == "OK") {
        // this.jobMapService.renderRoute(response);
        // this.form.get('googleMapsDirectionsResult').setValue(JSON.stringify(response));
        let legs = response.routes[0].legs;
        /* this.distance = (legs.reduce((sum, current) => sum + current.distance.value, 0));
         let distanceKm = (this.distance * 0.001);
         this.distanceText = distanceKm + " Km";
         this.estimatedDuration = (legs.reduce((sum, current) => sum + current.duration.value, 0));
         let num = this.estimatedDuration / 60;
         let hours = (num / 60);
         let rhours = Math.floor(hours);
         let minutes = (hours - rhours) * 60;
         let rminutes = Math.round(minutes);
         this.estimatedDurationText = rhours + " h " + rminutes + " m";
         this.form.get('distance').setValue(this.distance);
         this.form.get('estimatedDuration').setValue(this.estimatedDuration);*/
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
    );
  }

}

