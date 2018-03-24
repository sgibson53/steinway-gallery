import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { NotificationsService } from 'angular2-notifications';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products: Product[];

  constructor(private productsService: ProductsService, private notificationService: NotificationsService) { }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = [];
      for (const prop in products) {
        if (prop) {
          this.products.push({...products[prop], dbid: prop});
        }
      }
      // Debug
      window['products'] = this.products;
    }, err => {
      this.notificationService.error('Could Not Retrieve Products!', 'Please try again later.');
    });
    // console.log(this.productsService.getAllProducts());
  }

}
