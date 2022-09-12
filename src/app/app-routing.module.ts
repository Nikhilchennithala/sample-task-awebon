import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ViewProductComponent } from './views/view-product/view-product.component';


const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingPageComponent },
  { path: 'view-product', component: ViewProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
