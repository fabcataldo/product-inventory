import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { OperationType } from 'src/app/operations/interfaces/operation-type.interface';

import { lowStockProducts, operationTypes } from 'src/helpers/dummy-data';
import { DashboardService } from './dashboard.service';
import { DashboardApiResponse } from '../interfaces/dashboard-api.response';

describe('DashboardService', () => {
  let service: DashboardService;
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
  const totalInventoryValueMock = 25516988.12;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DashboardService] });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return chart data', fakeAsync(() => {
    let result: any;
    service.getChartData().subscribe((data) => (result = data));
    expect(result).toBeUndefined();
    tick(1000);
    expect(result).toEqual(chartData);
  }));

  it('should return dashboard info', fakeAsync(() => {
    let result: DashboardApiResponse = {
      totalProducts: totalProductsMock,
      lowStockProducts: lowStockProducts,
      totalInventoryValue: totalInventoryValueMock,
    };
    service.getDashboardInfo().subscribe((data) => (result = data));
    tick(1000);
    expect(result).toEqual(result);
  }));
});
