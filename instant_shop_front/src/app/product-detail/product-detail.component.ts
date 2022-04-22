import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getProduct();
    this.getProductTest();
  }

  getProduct() {
    this.route.paramMap.subscribe((params) => {
      const s_id = parseInt(params.get('s_id') || '{}');
      const p_id = parseInt(params.get('p_id') || '{}');
      this.productService.getProduct(s_id, p_id).subscribe((data) => {
        this.product = data;
      })
    })
  }

  getProductTest() {
    this.product = {id: 1, name: 'test', description: 'test_description', price: 100.0};
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  goBack() {
    this.location.back();
  }

}
