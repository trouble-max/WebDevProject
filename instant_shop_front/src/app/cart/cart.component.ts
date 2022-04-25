import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  name: string = '';
  address: string = '';

  constructor(private cartService: CartService,
              private location: Location) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onSubmit(): void {
    let price = 0;
    this.products.forEach(product => {
      price += product.price;
    })

     let curr_price = price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    window.alert(this.name + ' ' + this.address + ' ' + curr_price);
    this.name = '';
    this.address = '';
    this.products = this.cartService.clearCart();
  }

  getProducts() {
    this.products = JSON.parse(localStorage.getItem('cart_products') || '[]');
  }

  removeProduct(product: Product) {
    this.products = this.cartService.removeProduct(product);
    this.getProducts();
  }

  goBack() {
    this.location.back();
  }

}
