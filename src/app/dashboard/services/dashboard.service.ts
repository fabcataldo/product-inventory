import { Injectable } from '@angular/core';
import { delay, Observable, of, switchMap } from 'rxjs';
import {
  lowStockProducts,
  products,
  totalInventoryValue,
  totalProducts,
} from 'src/helpers/dummy-data';
import { DashboardApiResponse } from '../interfaces/dashboard-api.response';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor() {}

  getDashboardInfo(): Observable<DashboardApiResponse> {
    return of({
      totalProducts,
      lowStockProducts,
      totalInventoryValue,
    }).pipe(
      delay(1000),
      switchMap((dashboardInfo: DashboardApiResponse) => {
        return of(dashboardInfo);
      })
    );
  }

  getChartData(): Observable<any> {
    const purchasesByYear: Record<string, number> = {};
    const salesByYear: Record<string, number> = {};

    products.forEach((product) => {
      product.operations.forEach((operation) => {
        const year = new Date(operation.timestamp).getFullYear().toString();
        const amount = product.price;

        if (operation.operationType.name === 'Compra') {
          purchasesByYear[year] = (purchasesByYear[year] || 0) + amount;
        } else if (operation.operationType.name === 'Venta') {
          salesByYear[year] = (salesByYear[year] || 0) + amount;
        }
      });
    });

    const allYears = Array.from(
      new Set([...Object.keys(purchasesByYear), ...Object.keys(salesByYear)])
    ).sort();

    const stackedData = {
      labels: allYears,
      datasets: [
        {
          label: 'Compras',
          backgroundColor: '#42A5F5',
          data: allYears.map((year) => purchasesByYear[year] || 0),
        },
        {
          label: 'Ventas',
          backgroundColor: '#66BB6A',
          data: allYears.map((year) => salesByYear[year] || 0),
        },
      ],
    };
    return of(stackedData).pipe(
      delay(1000),
      switchMap(() => {
        return of(stackedData);
      })
    );
  }
}
