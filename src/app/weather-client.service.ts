import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherClientService {


  constructor(private http: HttpClient) { }

  getData(location: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6d1cf7e0db927b68cd27f71bfd1a86f4`);
  }

 /* getLocation(){
    return this.http.get(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAH36rZ62LE_8GEbF-6bICnaPBl6VnR5e4&callback=initMap`);
  }*/

}


//AIzaSyAyAJt09V7RpDjq9rcMXcdEOZF1tLUQWY0