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
}
