import { Component } from '@angular/core';

@Component({
  selector: 'app-product-ng-switch',
  templateUrl: './product-ng-switch.component.html',
  styleUrls: ['./product-ng-switch.component.css']
})
export class ProductNgSwitchComponent {

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
    },
    {
      "id": 4,
      "name": "RAM",
      "price": 10
    }   ,
    {
      "id": 4,
      "name": "Hard Disk",
      "price": 10
    }
  ]
}
