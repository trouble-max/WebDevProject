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
    this.getProductsTest();
    this.getCategories();
    this.getCategoriesTest();
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

  getProductsTest() {
    this.products = [{id: 1, name: 'test', description: 'test_description', price: 100.0},
                     {id: 2, name: '2test2', description: 'test2_description', price: 200.0}];
  }

  getCategories() {
    this.route.paramMap.subscribe((params) => {
      const s_id = parseInt(params.get('id') || '{}');
      this.productService.getCategories(s_id).subscribe((data) => {
        this.categories = data;
      });
    });
  }

  getCategoriesTest() {
    this.categories = [{id: 1, name: 'test'}, {id: 2, name: 'test2'}, {id: 3, name: 'test3'}, {id: 4, name: 'test4'},];
  }
  
  goBack() {
    this.location.back();
  }

}
