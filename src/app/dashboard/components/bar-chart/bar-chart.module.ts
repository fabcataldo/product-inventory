import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { BarChartComponent } from './bar-chart.component';

@NgModule({
  declarations: [BarChartComponent],
  imports: [CommonModule, ChartModule, SharedComponentsModule],
  exports: [BarChartComponent],
})
export class BarChartModule {}
