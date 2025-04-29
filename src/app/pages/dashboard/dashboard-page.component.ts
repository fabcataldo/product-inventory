import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardState } from 'src/store/dashboard/dashboard.reducer';
import { LowStockProducts } from 'src/app/dashboard/interfaces/low-stock-products.interface';
import { ProductsState } from 'src/store/products/products.reducer';
import { loadDashboard } from 'src/store/dashboard/dashboard.actions';
import { Subject, takeUntil } from 'rxjs';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  totalProducts = 0;
  lowStockProducts: LowStockProducts[] = [];
  totalInventoryValue = 0;
  loading = false;
  isDarkModeSetted = false;
  stackedData: any;
  private subscriptions$ = new Subject<void>();

  constructor(
    private store: Store<{
      products: ProductsState;
      dashboard: DashboardState;
    }>,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.loading = true;

    this.store.dispatch(loadDashboard());
    this.loadChartData();
    this.store
      .select((state) => state)
      .subscribe((resp) => {
        this.loading = resp.dashboard.loading;
        this.totalProducts = resp.dashboard.totalProducts;
        this.lowStockProducts = resp.dashboard.lowStockProducts;
        this.totalInventoryValue = resp.dashboard.totalInventoryValue;
      });
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
}
