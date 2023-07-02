import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-integrate-products',
  templateUrl: './integrate-products.component.html',
  styleUrls: ['./integrate-products.component.css'],
})
export class IntegrateProductsComponent {
  products: any[] = [];
  constructor(private productService: ProductService) {
    this.getALlProducts();
  }

  getALlProducts() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // saveProduct() {
  //   this.productService.saveProduct(this.productForm.value).subscribe(
  //     (data) => {
  //       this.getAllItems();
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
