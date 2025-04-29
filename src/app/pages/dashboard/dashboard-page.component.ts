import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardState } from 'src/store/dashboard/dashboard.reducer';
import { ProductsState } from 'src/store/products/products.reducer';
import { loadDashboard } from 'src/store/dashboard/dashboard.actions';
import { Subject, takeUntil } from 'rxjs';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/products/interfaces/product.interface';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  totalProducts = 0;
  lowStockProducts: Product[] = [];
  totalInventoryValue = 0;
  loading = false;
  isDarkModeSetted = false;
  stackedData: any;
  private subscriptions$ = new Subject<void>();
  showLowStockProducts = false;

  constructor(
    private store: Store<{
      products: ProductsState;
      dashboard: DashboardState;
    }>,
    public dashboardService: DashboardService,
    private router: Router
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

  setShowLowStockProducts() {
    this.showLowStockProducts = !this.showLowStockProducts;
  }
}
