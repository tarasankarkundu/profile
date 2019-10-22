import { Component, OnInit, ViewEncapsulation , Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent {
  @Input() arrList: any;
  constructor() { }

  getIconValue(name) {
    return name.substr(0, 1 );
  }
}
