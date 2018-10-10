import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
