import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from 'src/store/products/products.effects';
import { productsReducer } from 'src/store/products/products.reducer';
import { dashboardReducer } from 'src/store/dashboard/dashboard.reducer';
import { DashboardEffects } from 'src/store/dashboard/dashboard.effects';
import { SharedComponentsModule } from './shared/shared-components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      products: productsReducer,
      dashboard: dashboardReducer,
    }),
    EffectsModule.forRoot([ProductsEffects, DashboardEffects]),
    SharedComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
