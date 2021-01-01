import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatTabsModule } from '@angular/material/tabs'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ContactComponent } from './contact/contact.component';
import { WeatherComponent } from './weather/weather.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReportComponent } from './weather/report/report.component';
import { TodayComponent } from './weather/report/today/today.component';
import { HourlyComponent } from './weather/report/hourly/hourly.component';
import { DailyComponent } from './weather/report/daily/daily.component';
import { DailyAndHourlyCardComponent } from './weather/report/daily-and-hourly-card/daily-and-hourly-card.component';
import { WeatherIoComponent } from './weather-io/weather-io.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    AuthenticationComponent,
    ContactComponent,
    WeatherComponent,
    FooterComponent,
    ReportComponent,
    TodayComponent,
    HourlyComponent,
    DailyComponent,
    DailyAndHourlyCardComponent,
    WeatherIoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatTabsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
