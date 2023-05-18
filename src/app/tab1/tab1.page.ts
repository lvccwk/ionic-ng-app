import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(public productService: ProductService) {}

  async ngOnInit() {
    this.productService.loadProducts();
  }

  get products() {
    return this.productService.products;
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

  report(event: number) {
    console.log(event);
  }
}
