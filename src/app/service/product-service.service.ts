import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: any[] = [
    {
      "id": 1,
      "name": "Laptop",
      "description": "Dell Laptop",
      "price": 100,
      "manDate": new Date(2003, 1, 1)
    },
    {
      "id": 2,
      "name": "Keyboard",
      "description": "Mac Keyboard",
      "price": 50,
      "manDate":new Date(2008, 1, 1)
    },
    {
      "id": 3,
      "name": "Mouse",
      "description": "Dell Mouse",
      "price": 10,
      "manDate": new Date(1998, 1, 1)
    },
    {
      "id": 4,
      "name": "RAM",
      "description": "Sony RAM",
      "price": 10,
      "manDate": new Date(2021, 1, 1)
    }   ,
    {
      "id": 4,
      "name": "Hard Disk",
      "description": "Dell Hard Disk",
      "price": 10,
      "manDate": new Date(2009, 1, 1)
    }
  ]

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: any) {
    return this.products.find(product => product.id == id);
  }
}
