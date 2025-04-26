import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import * as DashboardActions from './dashboard.actions';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService
  ) {}

  loadDashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadDashboard),
      mergeMap(() =>
        this.dashboardService.getDashboardInfo().pipe(
          map((dashboardInfoApi) =>
            DashboardActions.loadDashboardSuccess({
              totalProducts: dashboardInfoApi.totalProducts,
              lowStockProducts: dashboardInfoApi.lowStockProducts,
              totalInventoryValue: dashboardInfoApi.totalInventoryValue,
            })
          ),
          catchError((error) =>
            of(
              DashboardActions.loadDashboardFailure({
                error:
                  error.message ||
                  'Error cargando la información del dashboard',
              })
            )
          )
        )
      )
    )
  );
}
