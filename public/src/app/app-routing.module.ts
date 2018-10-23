import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductSelectComponent } from './product-select/product-select.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'home', component: HomeComponent},
  { path: 'create-account', component: LoginComponent},
  { path: 'trade-in', component: ProductSelectComponent},
  { path: 'portal', component: CustomerPortalComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/landing' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
