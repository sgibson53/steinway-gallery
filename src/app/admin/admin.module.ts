import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
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
import { ProductsListComponent } from './admin-dashboard/products-list/products-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';

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
  declarations: [AdminDashboardComponent, NewProductFormComponent, ProductsListComponent, EditProductComponent]
})
export class AdminModule { }
