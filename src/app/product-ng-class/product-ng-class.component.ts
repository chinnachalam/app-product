import { Component } from '@angular/core';

@Component({
  selector: 'app-product-ng-class',
  templateUrl: './product-ng-class.component.html',
  styleUrls: ['./product-ng-class.component.css']
})
export class ProductNgClassComponent {
  products: any[] = [
    {
      "id": 1,
      "name": "Laptop",
      "price": 100
    },
    {
      "id": 2,
      "name": "Keyboard",
      "price": 49
    },
    {
      "id": 3,
      "name": "Mouse",
      "price": 10
    }
  ]
}
