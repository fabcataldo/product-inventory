import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() stackedData: any;
  stackedOptions: any;

  ngOnInit(): void {
    this.configureChartOptions();
  }

  private configureChartOptions() {
    this.stackedOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}
