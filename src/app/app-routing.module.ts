import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products-page.module').then(
        (m) => m.ProductsPageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard-page.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'product-detail',
    loadChildren: () =>
      import('./pages/product/product-page.module').then(
        (m) => m.ProductPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
