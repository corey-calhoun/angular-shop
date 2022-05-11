import { Component } from '@angular/core';
import { products} from "../../products";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  products = products;
  cart = [];

  constructor() {
    // @ts-ignore
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }



  addToCart(product: any) {
    // @ts-ignore
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
