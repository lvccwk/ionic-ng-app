import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  totalPrice = 0;

  constructor() {}

  loadProducts() {
    setTimeout(() => {
      this.products = [
        {
          id: 1,
          name: 'Apple',
          price: 123,
          cart: 0,
        },
        {
          id: 2,
          name: 'Banana',
          price: 345,
          cart: 0,
        },
        {
          id: 3,
          name: 'Cherry',
          price: 567,
          cart: 0,
        },
      ];
      this.totalPrice = 0;
      for (let product of this.products) {
        this.totalPrice += product.price * product.cart;
      }
    }, 1000);
  }

  addToCart(product: Product) {
    product.cart++;
    this.totalPrice += product.price;
  }
}
