import { Component, OnInit, OnDestroy } from '@angular/core';
import { BRANDS } from '../shared/constants/brands.constants';
import { ProductsService } from '../shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/takeUntil';
import { componentDestroyed } from 'ng2-rx-componentdestroyed';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public brands;
  public products;
  public selectedCategory = 'All Brands';

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.brands = Object.values(BRANDS);
    this.productsService.getAllProducts().takeUntil(componentDestroyed(this)).subscribe(products => {
      this.products = [];
      for (const prop in products) {
        if (prop) {
          this.products.push({...products[prop], dbid: prop});
        }
      }
    });

    this.route.queryParams.subscribe(params => {
      if (params.category) {
        this.changeCategory(params.category);
      }
    });
  }

  public changeCategory(newCategory) {
    this.selectedCategory = newCategory;
  }

  ngOnDestroy() {
    // Necessary from ng2-rx-componentdestroyed
  }

}
