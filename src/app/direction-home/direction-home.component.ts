import { Component, OnInit,ViewChild,AfterViewInit, ElementRef,NgZone, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-direction-home',
  templateUrl: './direction-home.component.html',
  styleUrls: ['./direction-home.component.css']
})
export class DirectionHomeComponent implements OnInit {
  @ViewChild('origin', {static: false}) location!:  ElementRef;
  @ViewChild('destination',{static:false}) destination!:ElementRef;
 
  @Output()  originMarker=new EventEmitter<any>();
  @Output()  destinationMarker=new EventEmitter<any>();
   
  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
  }
	 ngAfterViewInit():  void {
        this.googlePlaceAutoCompleteAttach();
        this.googlePlaceAutoCompleteAttach1();
      }
 
      private googlePlaceAutoCompleteAttach():void {
        let autocomplete =
        new google.maps.places.Autocomplete(this.location.nativeElement, { types: ["(cities)"] });
        autocomplete.addListener("place_changed",
        () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              return;
            } else {
              console.log(place);
              this.originMarker.emit({lat:place.geometry.location.lat(),lng:place.geometry.location.lng()})
              // this.address = place.formatted_address;
             // this.lat = place.geometry.location.lat();
              // this.lng = ;place.geometry.location.lng()
              // this.marker.setPosition(new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng()));
              // this.map.setCenter(new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng()));
            }
          });
        });
      }
      private googlePlaceAutoCompleteAttach1() {
        let autocomplete =
        new google.maps.places.Autocomplete(this.destination.nativeElement, { types: ["(cities)"] });
        autocomplete.addListener("place_changed",
        () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
              return;
            } else {
              console.log(place);
              // this.address = place.formatted_address;
              this.destinationMarker.emit({lat:place.geometry.location.lat(),lng:place.geometry.location.lng()})
              // this.lat = place.geometry.location.lat();
              // this.lng = place.geometry.location.lng();
              // this.marker.setPosition(new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng()));
              // this.map.setCenter(new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng()));
            }
          });
        });
      }

}
