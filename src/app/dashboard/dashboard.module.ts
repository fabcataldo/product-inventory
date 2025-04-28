import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartModule } from './components/bar-chart/bar-chart.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BarChartModule],
  exports: [BarChartModule],
})
export class DashboardModule {}
