import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
  { path: 'home', component: HomeComponent},
  { path: 'edit/:product_id' , component: ProductEditComponent},
  { path : 'products', component: ProductsComponent},
  { path: 'new/product', component: ProductAddComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/landing' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
