import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from 'src/store/products/products.effects';
import { productsReducer } from 'src/store/products/products.reducer';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { OperationsModule } from './operations/operations.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoriesModule,
    ProductsModule,
    OperationsModule,
    StoreModule.forRoot({
      products: productsReducer,
    }),
    EffectsModule.forRoot([ProductsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
