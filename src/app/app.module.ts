import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TimelineComponent} from './pages/timeline/timeline.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {HomeComponent} from './pages/home/home.component';
import {MyInterestsComponent} from './pages/my-interests/my-interests.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {MyContactComponent} from './pages/my-contact/my-contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import { ActivityBreakupComponent } from './pages/activity-breakup/activity-breakup.component';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    HomeComponent,
    ProfileComponent,
    SkillsComponent,
    MyInterestsComponent,
    MyContactComponent,
    ActivityBreakupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighchartsChartModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAiPhqfp6W-QWeo6yTOP3RHObV0Rm-ouM'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
