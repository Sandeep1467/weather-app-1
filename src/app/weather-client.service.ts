import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WeatherClientService {

 
    //key= "6d1cf7e0db927b68cd27f71bfd1a86f4";
    
  //baseUrl: "https://api.openweathermap.org/data/2.5/weather?id=524901&appid=6d1cf7e0db927b68cd27f71bfd1a86f4"

  constructor( private http:HttpClient) {}
   // this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
   
   getData() {
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=london&appid=6d1cf7e0db927b68cd27f71bfd1a86f4");
  }
}
/* getWeather(location){
    return this.http.get(
        'http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid='+this.key
    );

  getData() {
    return this.http.get(this.url + city +  '&APPID=' + this.key).map( res => res.json()););
  }*/