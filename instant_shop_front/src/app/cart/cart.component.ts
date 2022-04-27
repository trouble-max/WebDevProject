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
  timecomf: string ='';

  constructor(private cartService: CartService,
              private location: Location) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onSubmit(): void {
    let price = 0;
    this.products.forEach(product => {
      price += product.price * product.count;
    })

     let curr_price = price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    window.alert(this.name + ' ' + this.address + ' ' + curr_price);
    this.name = '';
    this.address = '';
    this.timecomf ='';
    this.products = this.cartService.clearCart();
  }

  getProducts() {
    console.log(JSON.parse(localStorage.getItem('cart_products') || '[]'));
    this.products = JSON.parse(localStorage.getItem('cart_products') || '[]');
  }

  removeProduct(product: Product) {
    this.products = this.cartService.removeProduct(product);
    this.getProducts();
  }
  addProduct(product:Product){
    product.count += 1;
  }
  minusProduct(product:Product){
    if(product.count==1){
      this.removeProduct(product)
    }else{
      product.count -= 1;
    }
  }
  goBack() {
    this.location.back();
  }

}
