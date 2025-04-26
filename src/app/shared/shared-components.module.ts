import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [SkeletonComponent],
  imports: [CommonModule, SkeletonModule, ButtonModule],
  exports: [SkeletonComponent, ButtonModule],
})
export class SharedComponentsModule {}
