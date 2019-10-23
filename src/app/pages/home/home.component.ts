import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  profileData: any;
  educationData: any;
  experienceData: any;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.getProfileData();
    this.getEducationData('./assets/timelineData.json');
  }
  getProfileData() {

    this.api.getTimelineData('./assets/profile.json').then((data) => {
      const res: any = data;
      this.profileData = res.profile;
    }, (err) => {

    });
}
getEducationData(url) {
    this.api.getTimelineData(url).then((data) => {
      const res: any = data;
      if (res.timeline) {
        this.educationData = res.timeline;
        this.getExperienceData('./assets/timelineData2.json');
      }
    }, (err) => {
    });
  }
   getExperienceData(url) {
     this.api.getTimelineData(url).then((data) => {
       const res: any = data;
       if (res.timeline) {
         // this.showLoader=false;
         this.experienceData = res.timeline;
       }
     }, (err) => {
     });
   }
}
