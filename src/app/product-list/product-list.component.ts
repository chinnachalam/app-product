import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    title: String = "Product List"
    products: any[] = [
      {
        "id": 1,
        "name": "Laptop",
        "description": "Dell Laptop",
        "price": 100,
        "manDate": new Date(2003, 1, 1),
        "rating": 3,
      },
      {
        "id": 2,
        "name": "Keyboard",
        "description": "Mac Keyboard",
        "price": 50,
        "manDate":new Date(2008, 1, 1),
        "rating": 4,
      },
      {
        "id": 3,
        "name": "Mouse",
        "description": "Dell Mouse",
        "price": 10,
        "manDate": new Date(1998, 1, 1),
        "rating": 5,
      },
      {
        "id": 4,
        "name": "RAM",
        "description": "Sony RAM",
        "price": 10,
        "manDate": new Date(2021, 1, 1),
        "rating": 2.8,
      }   ,
      {
        "id": 4,
        "name": "Hard Disk",
        "description": "Dell Hard Disk",
        "price": 10,
        "manDate": new Date(2009, 1, 1),
        "rating": 3.5,
      }
    ]


    parentRatingClickEvent(message: string) {
      this.title = message
    }
}
