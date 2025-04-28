import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OperationsService } from 'src/app/operations/service/operations.service';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit, OnDestroy {
  stackedData: any;
  stackedOptions: any;
  private subscriptions$ = new Subject<void>();
  loading = false;

  constructor(private operationsService: OperationsService) {}

  ngOnInit(): void {
    this.stackedData = {
      labels: ['2023', '2024', '2025'],
      datasets: [
        {
          label: '2023',
          backgroundColor: '#42A5F5',
          data: [50, 25, 12],
        },
        {
          label: '2024',
          backgroundColor: '#66BB6A',
          data: [21, 80, 24],
        },
        {
          label: '2025',
          backgroundColor: '#FFA726',
          data: [1, 10, 10],
        },
      ],
    };

    this.stackedOptions = {
      responsive: true,
      maintainAspectRatio: false,
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

  ngOnDestroy(): void {
    this.subscriptions$.next();
    this.subscriptions$.complete();
  }

  private buildOperationsTree() {
    this.loading = true;
    this.operationsService
      .getOperations()
      .pipe(takeUntil(this.subscriptions$))
      .subscribe({
        next: (categoriesApi) => {
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
