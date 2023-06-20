import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './prodct/menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductNgStyleComponent } from './product-ng-style/product-ng-style.component';
import { ProductNgClassComponent } from './product-ng-class/product-ng-class.component';
import { ProductNgSwitchComponent } from './product-ng-switch/product-ng-switch.component';
import { ProductPipesComponent } from './product-pipes/product-pipes.component';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductNgStyleComponent,
    ProductNgClassComponent,
    ProductNgSwitchComponent,
    ProductPipesComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
