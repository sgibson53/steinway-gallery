import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ProductsService } from '../../services/products.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    private productService: ProductsService,
    private notificationService: NotificationsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick() {
    this.closeDialog();
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public deleteProduct() {
    this.productService.deleteProduct(this.data.id).then(success => {
      this.notificationService.success('Sweet!', 'Product successfully deleted.');
    },
    error => {
      this.notificationService.error('Whoops!', 'Had a problem deleting product.');
    });
    this.dialogRef.close();
  }

}
