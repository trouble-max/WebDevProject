import { Component, OnInit } from '@angular/core';
import { Shop } from '../models';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  shops: Shop[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getShops();
    this.getShopsTest();
  }

  getShops() {
    this.shopService.getShops().subscribe((data) => {
      this.shops = data;
    })
  }

  getShopsTest() {
    this.shops = [{id: 1, name: 'test', description: 'test_description'}];
  }

}
