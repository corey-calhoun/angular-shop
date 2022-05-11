import { Component } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onBuy(product: { price: number; name: string; description: string; id: number }) {
    window.alert(`You added ${product.name} for ${product.price} to your cart`);
  }
}
