import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit, OnDestroy {
  stackedData: any;
  stackedOptions: any;
  loading = false;
  private subscriptions$ = new Subject<void>();

  constructor(private dashboardService: DashboardService) {}

  ngOnDestroy(): void {
    this.subscriptions$.next();
    this.subscriptions$.complete();
  }

  ngOnInit(): void {
    this.loadChartData();
    this.configureChartOptions();
  }

  loadChartData() {
    this.loading = true;
    this.dashboardService
      .getChartData()
      .pipe(takeUntil(this.subscriptions$))
      .subscribe({
        next: (chartData: any) => {
          this.stackedData = chartData;
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  configureChartOptions() {
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
