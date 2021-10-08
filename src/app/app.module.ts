import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { WeatherClientService } from './weather-client.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [WeatherClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAH36rZ62LE_8GEbF-6bICnaPBl6VnR5e4'
    })*/