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

  setProducts(products: Product[]) {
    this.products = products;
  }

  removeProduct(product: Product) {
    const removeFirstFoundval = (list: Product[], prod: Product): Product[] => {
      const idx = list.findIndex(object => {
        return object.id === prod.id;
      });
      
      if (idx === -1) {
          return [...list]
      }

      return list.filter((el, i) => i !== idx)
    };

    this.products = removeFirstFoundval(this.products, product);
    localStorage.setItem('cart_products', JSON.stringify(this.products));
    return this.products;
  }

  clearCart() {
    this.products = [];
    localStorage.removeItem('cart_products')
    return this.products;
  }

  constructor() { }
}
