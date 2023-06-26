import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-routing-product-edit',
  templateUrl: './routing-product-edit.component.html',
  styleUrls: ['./routing-product-edit.component.css']
})
export class RoutingProductEditComponent {
  product: any = {};
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService)
    {
      this.route.paramMap.subscribe(
        params => {
          var id = params.get('id');
          this.product = productService.getProductById(id);
        }
      )
    }
}
