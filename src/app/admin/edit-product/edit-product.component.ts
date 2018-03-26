import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/models/product.model';
import { BRANDS } from '../../shared/constants/brands.constants';

import 'rxjs/add/operator/take';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public product: Product;
  public brands: any;
  public id: string;
  @ViewChild('editProductForm') newProductForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private notificationService: NotificationsService) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productsService.getProduct(this.id).take(1).subscribe((p: Product) => this.product = p);
    }
  }

  ngOnInit() {
    this.brands = Object.values(BRANDS);
  }

  public onSubmitForm() {
    delete this.product.dbid;
    this.productsService.updateProduct(this.id, this.product).then(
      success => {
        this.notificationService.success('Product Saved!');
      },
      error => {
        this.notificationService.error('Error!', `Couldn't save data! Please try again later.`);
      });
  }

}
