import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingHomeComponent } from './routing/routing-home/routing-home.component';
import { RoutingAboutComponent } from './routing/routing-about/routing-about.component';
import { RoutingContactComponent } from './routing/routing-contact/routing-contact.component';
import { RoutingLoginComponent } from './routing/routing-login/routing-login.component';
import { RoutingPageNotFoundComponent } from './routing/routing-page-not-found/routing-page-not-found.component';
import { RoutingProductsListComponent } from './routing/routing-products-list/routing-products-list.component';
import { RoutingProductComponent } from './routing/routing-product/routing-product.component';
import { RoutingProductEditComponent } from './routing/routing-product-edit/routing-product-edit.component';

const routes: Routes = [
  { path: 'home', component: RoutingHomeComponent},
  { path: 'about', component: RoutingAboutComponent},
  { path: 'contact', component: RoutingContactComponent},
  { path: 'login', component: RoutingLoginComponent},
  { path: 'products', component: RoutingProductsListComponent},
  { path: 'products/:id', component: RoutingProductComponent},
  { path: 'products/:id/edit', component: RoutingProductEditComponent},
  { path: '**', component: RoutingPageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
