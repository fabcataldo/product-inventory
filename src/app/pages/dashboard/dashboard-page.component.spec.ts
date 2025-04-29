import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { DashboardPageComponent } from './dashboard-page.component';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from 'src/store/dashboard/dashboard.reducer';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { from, of } from 'rxjs';
import { Component, Input } from '@angular/core';
import { BarChartComponent } from 'src/app/dashboard/components/bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OperationsModule } from 'src/app/operations/operations.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { By } from '@angular/platform-browser';
import { loadDashboard } from 'src/store/dashboard/dashboard.actions';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;
  const chartData = {
    labels: ['2023', '2024', '2025'],
    datasets: [
      {
        backgroundColor: '#42A5F5',
        data: [159793.93000000017, 255198.34000000003, 86309.17000000004],
        label: 'Compras',
      },
      {
        backgroundColor: '#66BB6A',
        data: [173259.4800000001, 242453.96000000005, 82257.73999999995],
        label: 'Ventas',
      },
    ],
  };
  const totalProductsMock = 1000;
  const lowStockProductsMock = 56;
  const totalInventoryValueMock = 25516988.12;

  @Component({
    selector: 'bar-chart',
  })
  class BarChartComponentMock {
    @Input() stackedData: any;
  }
  const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPageComponent],
      imports: [
        StoreModule.forRoot({ dashboard: dashboardReducer }),
        CommonModule,
        DashboardPageRoutingModule,
        SharedComponentsModule,
        OperationsModule,
        FormsModule,
      ],
      providers: [{ provide: DashboardService }],
    })
      .overrideComponent(DashboardPageComponent, {
        add: {
          imports: [BarChartComponentMock],
        },
        remove: {
          imports: [BarChartComponent],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;

    spyOn(component, 'loadChartData').and.callThrough();
    spyOn(component.dashboardService, 'getChartData').and.callFake(() =>
      from([chartData])
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadDashboard action and display data in HTML', () => {
    component.loading = false;
    fixture.detectChanges();

    console.log('component');
    console.log(fixture.nativeElement);
    expect(component.stackedData.datasets).not.toBeNull();

    const chart = fixture.nativeElement.querySelector(
      'bar-chart'
    ) as HTMLElement;
    expect(chart).toBeTruthy();

    const barChartComponent = fixture.debugElement.query(
      By.directive(BarChartComponent)
    ).componentInstance;
    expect(barChartComponent.stackedData).toEqual(chartData);
  });

  it('should obtain and render dashboard data', fakeAsync(() => {
    console.log('storeSpy.dispatch');

    fixture.detectChanges();

    console.log('component.totalInventoryValue');
    console.log(component.totalInventoryValue);
    expect(storeSpy.dispatch).toHaveBeenCalledWith(loadDashboard());

    const totalProductsInfoElement = fixture.debugElement.query(
      By.css('font-medium text-500 mb-3')
    );

    const lowStockProductsInfoElement = fixture.debugElement.query(
      By.css('font-medium text-500 mb-3 mr-4')
    );

    expect(totalProductsInfoElement.nativeElement.textContent).toContain(
      totalProductsMock
    );
    expect(lowStockProductsInfoElement.nativeElement.textContent).toContain(
      `${lowStockProductsMock} productos`
    );

    expect(component.loading).toEqual(false);
    expect(component.totalProducts).toEqual(totalProductsMock);
    expect(component.lowStockProducts.length).toEqual(lowStockProductsMock);
    expect(component.totalInventoryValue).toEqual(totalInventoryValueMock);
  }));
});
