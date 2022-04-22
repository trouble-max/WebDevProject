import { Injectable } from '@angular/core';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = JSON.parse(localStorage.getItem('cart_products') || '[]');

  addToCart(product: Product) {
    this.products.push(product);
    localStorage.setItem('cart_products', JSON.stringify(this.products));
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    localStorage.removeItem('cart_products')
    return this.products;
  }

  constructor() { }
}
