import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';

const adminRoutes: Routes = [
    { path: '', component: ManageProductsComponent },
    { path: 'new', component: NewProductFormComponent },
    { path: 'edit/:id', component: EditProductComponent },
    { path: 'manage-orders', component: ManageOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
