import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherClientService {
  weatherApi = {
    key: "6d1cf7e0db927b68cd27f71bfd1a86f4",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather" 
}
  constructor( private http:HttpClient) { }
  
}