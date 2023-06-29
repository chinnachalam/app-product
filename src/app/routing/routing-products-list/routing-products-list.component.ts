import { LoggingService } from './../../service/logging.service';
import { ProductServiceService } from './../../service/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-products-list',
  templateUrl: './routing-products-list.component.html',
  styleUrls: ['./routing-products-list.component.css'],
  providers: [LoggingService]
})
export class RoutingProductsListComponent {

  products : any []
  constructor(productService: ProductServiceService,  loggingService: LoggingService) {

    loggingService.logInfo("RoutingProductsListComponent log info message")
    loggingService.logWarn("RoutingProductsListComponent log warn message")
    loggingService.logError("RoutingProductsListComponent log error message")

    this.products = productService.getAllProducts();
  }
}
