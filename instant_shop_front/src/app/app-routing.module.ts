import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  {path: 'shops', component: ShopsComponent},
  {path: 'shops/:id/products', component: ProductsComponent},
  {path: 'shops/:s_id/products/:p_id', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '', redirectTo: 'shops', pathMatch: 'full'},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
