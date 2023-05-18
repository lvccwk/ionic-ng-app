import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  now = new Date();

  clock = timer(0, 1000).pipe(map(() => new Date()));

  constructor(public productService: ProductService) {}

  get totalPrice() {
    return this.productService.totalPrice;
  }
}
