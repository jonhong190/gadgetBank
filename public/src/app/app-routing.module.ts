import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
  { path: 'home', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/landing' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
