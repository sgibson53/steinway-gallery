import { Component, OnInit } from '@angular/core';
import { BRANDS } from '../shared/constants/brands.constants';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public brands;
  public products;
  public selectedCategory = 'All Brands';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.brands = Object.values(BRANDS);
    this.productsService.getAllProducts().subscribe(products => {
      this.products = [];
      for (const prop in products) {
        if (prop) {
          this.products.push({...products[prop], dbid: prop});
        }
      }
    });
  }

  public changeCategory(newCategory) {
    this.selectedCategory = newCategory;
  }

}
