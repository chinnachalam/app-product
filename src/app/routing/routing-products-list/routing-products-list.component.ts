import { ProductServiceService } from './../../service/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-products-list',
  templateUrl: './routing-products-list.component.html',
  styleUrls: ['./routing-products-list.component.css']
})
export class RoutingProductsListComponent {

  products : any []
  constructor(productService: ProductServiceService) {
     this.products = productService.getAllProducts();
  }
}
