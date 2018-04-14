import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { NotificationsService } from 'angular2-notifications';
import { Product } from '../../../shared/models/product.model';
import { MatTableDataSource } from '@angular/material';
import { filter } from 'rxjs/operator/filter';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../../../shared/components/delete-dialog/delete-dialog.component';
import 'rxjs/add/operator/takeUntil';
import { componentDestroyed } from 'ng2-rx-componentdestroyed';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  public products: Product[];
  public displayedColumns = ['id', 'brand', 'label', 'subLabel', 'price', 'edit-delete'];
  public dataSource;

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private router: Router) { }

  ngOnInit() {
    this.productsService.getAllProducts().takeUntil(componentDestroyed(this)).subscribe(products => {
      this.products = [];
      for (const prop in products) {
        if (prop) {
          this.products.push({...products[prop], dbid: prop});
        }
      }

      this.dataSource = new MatTableDataSource(this.products);
    }, err => {
      this.notificationService.error('Could Not Retrieve Products!', 'Please try again later.');
    });
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public onEditClicked(productId) {
    this.router.navigate(['/admin/edit', productId]);
  }

  public openDeleteDialog(id) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {width: '380px', data: {id: id}});
  }

  ngOnDestroy() {
    // Necessary from ng2-rx-componentdestroyed
  }

}
