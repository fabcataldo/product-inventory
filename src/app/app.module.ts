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
import { ProductsModule } from './products/products.module';
import { OperationsModule } from './operations/operations.module';
import { CategoriesModule } from './categories/categories.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      products: productsReducer,
      dashboard: dashboardReducer,
    }),
    EffectsModule.forRoot([ProductsEffects, DashboardEffects]),
    ProductsModule,
    OperationsModule,
    SharedComponentsModule,
    CategoriesModule,
    MessagesModule,
    InputSwitchModule,
    FormsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
