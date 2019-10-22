import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-activity-breakup',
  templateUrl: './activity-breakup.component.html',
  styleUrls: ['./activity-breakup.component.scss']
})
export class ActivityBreakupComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions;
  constructor() { }

  setActivityBreakupChart() {
    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y}%'
          },
          showInLegend: true
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{point.key}</span><br>',
        pointFormat: '<b>{point.y}%</b>'
      },
      series: [
        {
          colorByPoint: true,
          data: [
            {
              name: 'Code',
              y: 40
            },
            {
              name: 'Design',
              y: 25
            },
            {
              name: 'Team Management',
              y: 10
            },
            {
              name: 'Requirement Discussion',
              y: 15
            },
            {
              name: 'Others',
              y: 10
            }]
        }
      ]
    };
  }

  ngOnInit() {
    this.setActivityBreakupChart();
  }

}
