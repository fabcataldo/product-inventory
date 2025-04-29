import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsListComponent } from './components/operations-list/operations-list.component';
import { TableModule } from 'primeng/table';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { BarChartModule } from '../dashboard/components/bar-chart/bar-chart.module';
import { OperationsService } from './services/operations/operations.service';

@NgModule({
  declarations: [OperationsListComponent, FormatDatePipe],
  imports: [CommonModule, TableModule],
  providers: [OperationsService],
  exports: [OperationsListComponent, FormatDatePipe, BarChartModule],
})
export class OperationsModule {}
