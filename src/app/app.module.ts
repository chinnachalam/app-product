import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './prodct/menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductNgStyleComponent } from './product-ng-style/product-ng-style.component';
import { ProductNgClassComponent } from './product-ng-class/product-ng-class.component';
import { ProductNgSwitchComponent } from './product-ng-switch/product-ng-switch.component';
import { ProductPipesComponent } from './product-pipes/product-pipes.component';
import { AgePipe } from './pipes/age.pipe';
import { RatingComponent } from './rating/rating.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateFormExampleComponent } from './template-form-example/template-form-example.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { ReactiveFormWithForm0buikderExampleComponent } from './reactive-form-with-form0buikder-example/reactive-form-with-form0buikder-example.component';
import { RoutingHomeComponent } from './routing/routing-home/routing-home.component';
import { RoutingContactComponent } from './routing/routing-contact/routing-contact.component';
import { RoutingAboutComponent } from './routing/routing-about/routing-about.component';
import { RoutingLoginComponent } from './routing/routing-login/routing-login.component';
import { RoutingPageNotFoundComponent } from './routing/routing-page-not-found/routing-page-not-found.component';
import { RoutingProductsListComponent } from './routing/routing-products-list/routing-products-list.component';
import { RoutingProductComponent } from './routing/routing-product/routing-product.component';
import { RoutingProductEditComponent } from './routing/routing-product-edit/routing-product-edit.component';
import { LogoutComponent } from './routing/logout/logout.component';
import { IntegrateProductsComponent } from './intergration/integrate-products/integrate-products.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppProductInterceptorService } from './service/app-product-interceptor.service';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductNgStyleComponent,
    ProductNgClassComponent,
    ProductNgSwitchComponent,
    ProductPipesComponent,
    AgePipe,
    RatingComponent,
    TemplateFormComponent,
    TemplateFormExampleComponent,
    ReactiveFormExampleComponent,
    ReactiveFormWithForm0buikderExampleComponent,
    RoutingHomeComponent,
    RoutingContactComponent,
    RoutingAboutComponent,
    RoutingLoginComponent,
    RoutingPageNotFoundComponent,
    RoutingProductsListComponent,
    RoutingProductComponent,
    RoutingProductEditComponent,
    LogoutComponent,
    IntegrateProductsComponent,
    ViewStudentComponent,
    CreateStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppProductInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
