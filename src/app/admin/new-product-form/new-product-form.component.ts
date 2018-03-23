import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.scss']
})
export class NewProductFormComponent implements OnInit {

  public newProduct: Product;
  public submitted = false;
  @ViewChild('newProductForm') newProductForm;

  constructor(private notificationService: NotificationsService, private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.newProduct = {
      model: '',
      label: '',
      subLabel: '',
      price: null,
      description: '',
      imageURL: ''
    };
  }

  onSubmitForm() {
    this.submitted = true;
    this.productService.saveNewProduct(this.newProduct).then(
      success => {
        this.notificationService.success('Awesome', 'Product successfully added');
        this.router.navigate(['admin']);
      },
      error => {
        this.notificationService.error('No Bueno', 'Could not save new product.');
      });
  }

}
