import { Component } from '@angular/core';

@Component({
  selector: 'app-product-ng-style',
  templateUrl: './product-ng-style.component.html',
  styleUrls: ['./product-ng-style.component.css']
})
export class ProductNgStyleComponent {

  getColor(price: any) {
    if(price > 50) {
      return "yellow";
    } else {
      return "red"
    }
  }

  products: any[] = [
    {
      "id": 1,
      "name": "Laptop",
      "price": 100
    },
    {
      "id": 2,
      "name": "Keyboard",
      "price": 50
    },
    {
      "id": 3,
      "name": "Mouse",
      "price": 10
    }
  ]

}
