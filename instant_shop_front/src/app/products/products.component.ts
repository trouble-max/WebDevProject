import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Product } from '../models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  nameFilter: string = '';

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location,
              public router: Router) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      this.productService.getProducts(id).subscribe((data) => {
        this.products = data;
      });
    });
  }

  getProductsByCategory(c_id: number) {
    this.route.paramMap.subscribe((params) => {
      const s_id = parseInt(params.get('id') || '{}');
      this.productService.getProductsByCategory(s_id, c_id).subscribe((data) => {
        this.products = data;
      });
    });
  }

  getCategories() {
    this.route.paramMap.subscribe((params) => {
      const s_id = parseInt(params.get('id') || '{}');
      this.productService.getCategories(s_id).subscribe((data) => {
        this.categories = data;
      });
    });
  }

  goBack() {
    this.location.back();
  }

}
