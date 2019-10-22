import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profileApp';
  toogle: any = false;
  constructor() {
  }
  showNav() {
    this.toogle = this.toogle ? false : true;
  }
  navigateTo(section){
    this.toogle = false;
    location.href = `#${section}`;
  }
}
