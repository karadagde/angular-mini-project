import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MovieDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
