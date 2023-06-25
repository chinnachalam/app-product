import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingHomeComponent } from './routing/routing-home/routing-home.component';
import { RoutingAboutComponent } from './routing/routing-about/routing-about.component';
import { RoutingContactComponent } from './routing/routing-contact/routing-contact.component';
import { RoutingLoginComponent } from './routing/routing-login/routing-login.component';
import { RoutingPageNotFoundComponent } from './routing/routing-page-not-found/routing-page-not-found.component';

const routes: Routes = [
  { path: 'home', component: RoutingHomeComponent},
  { path: 'about', component: RoutingAboutComponent},
  { path: 'contact', component: RoutingContactComponent},
  { path: 'login', component: RoutingLoginComponent},
  { path: '**', component: RoutingPageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
