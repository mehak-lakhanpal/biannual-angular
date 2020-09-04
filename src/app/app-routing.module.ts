import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  {
    path:'products',
    component:ProductComponent,
  },
  {
    path:'products/product/:id',
    component:ProductDescComponent
  },
  {
    path:'cart',
    component:CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
