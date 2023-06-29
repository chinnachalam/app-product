import { LoggingService } from './../../service/logging.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-routing-product',
  templateUrl: './routing-product.component.html',
  styleUrls: ['./routing-product.component.css'],
  providers: [LoggingService]
})
export class RoutingProductComponent implements OnInit{
  id: any = ''
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private loggingService: LoggingService)
    {}

  ngOnInit(): void {

    this.loggingService.logInfo("RoutingProductComponent log info message")
    this.loggingService.logWarn("RoutingProductComponent log warn message")
    this.loggingService.logError("RoutingProductComponent log error message")

    this.id = this.route.snapshot.paramMap.get("id");
    this.product = this.productService.getProductById(this.id);

    console.log("action " +this.route.snapshot.queryParamMap.get('action'))

    console.log("product name " +this.route.snapshot.queryParamMap.get('productName'))
  }
}
