import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MenubarModule } from 'primeng/menubar';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [SkeletonComponent, MenubarComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    ButtonModule,
    MenubarModule,
    OverlayModule,
  ],
  exports: [SkeletonComponent, ButtonModule, MenubarComponent],
})
export class SharedComponentsModule {}
