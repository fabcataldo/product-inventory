import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsListComponent } from './components/operations-list/operations-list.component';
import { TableModule } from 'primeng/table';
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  declarations: [OperationsListComponent, FormatDatePipe],
  imports: [CommonModule, TableModule],
  exports: [OperationsListComponent, FormatDatePipe],
})
export class OperationsModule {}
