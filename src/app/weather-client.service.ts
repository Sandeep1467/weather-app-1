import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherClientService {

  weatherApi = {
    key: "6d1cf7e0db927b68cd27f71bfd1a86f4",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?id=524901&appid=6d1cf7e0db927b68cd27f71bfd1a86f4" 
}
  constructor( private http:HttpClient) { }
  getData() {
    return this.http.get(this. weatherApi.baseUrl)
      //.pipe(tap(data => this.entities = data),)
      ;
  }

}
//api.openweathermap.org/data/2.5/weather?id=524901&appid=YOUR_API_KEY