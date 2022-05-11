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


  buyNow() {
    //add product to cart and redirect to cart page

  }
}
