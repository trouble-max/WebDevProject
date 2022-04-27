import { Injectable } from '@angular/core';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Product[] = JSON.parse(localStorage.getItem('cart_products') || '[]');

  addToCart(product: Product) {
    let bool_c:boolean = false;

    for(var val of this.products){
      if(val.id == product.id){
        if(product.count==null) product.count=1;
        product.count += 1;
        console.log(product.id, product.count)
        bool_c = true;
        break;
      }
    }
    if(bool_c == false){
      product.count = 1
      this.products.push(product);
    }
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
  updateProduct(product: Product){
    console.log("I'm HERE")
    for(var prod of this.products){
      console.log("Cycle")
      if(prod.id==product.id){
        prod=product
        break;
      }
    }
  }

  clearCart() {
    this.products = [];
    localStorage.removeItem('cart_products')
    return this.products;
  }

  constructor() { }
}
