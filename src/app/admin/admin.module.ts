import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './manage-products/products-list/products-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { OrdersListComponent } from './manage-orders/orders-list/orders-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    ManageProductsComponent,
    NewProductFormComponent,
    ProductsListComponent,
    EditProductComponent,
    ManageOrdersComponent,
    OrdersListComponent]
})
export class AdminModule { }
