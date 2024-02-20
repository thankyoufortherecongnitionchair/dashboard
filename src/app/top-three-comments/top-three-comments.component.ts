import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-top-three-comments',
  templateUrl: './top-three-comments.component.html',
  styleUrls: ['./top-three-comments.component.scss'],
})
export class TopThreeCommentsComponent {
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225,
    },
    title: {
      text: 'Top 3 interractions',
    },
    xAxis: {
      categories: [
        "Activity on Women's Health",
        'Hygiene Tips with Tukaram',
        'Menstruation Guide',
      ],
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        type: 'bar',
        showInLegend: false,
        data: [
          {
            name: 'Lenova Thinkpad E15',
            y: 395,
            color: '#044342',
          },
          {
            name: 'Nectar Orange Juice',
            y: 385,
            color: '#7e0505',
          },
          {
            name: 'Axe Deodarant',
            y: 275,
            color: '#ed9e20',
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  });
}
