import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-joins-by-stae',
  templateUrl: './joins-by-stae.component.html',
  styleUrls: ['./joins-by-stae.component.scss'],
})
export class JoinsByStaeComponent {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325,
    },
    title: {
      text: 'Keyword wise cateogrization',
    },
    xAxis: {
      categories: [
        'Maharashtra',
        'Tamil Nadu',
        'Delhi',
        'Karnataka',
        'Appliances',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in %',
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'Health',
            y: 41.0,
            color: '#044342',
          },
          {
            name: 'Menstruation guide',
            y: 33.8,
            color: '#7e0505',
          },
          {
            name: 'General guide',
            y: 6.5,
            color: '#ed9e20',
          },
          {
            name: 'Hygiene tips',
            y: 15.2,
            color: '#6920fb',
          },
          {
            name: 'Urgent Help',
            y: 3.5,
            color: '#121212',
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  });
}
