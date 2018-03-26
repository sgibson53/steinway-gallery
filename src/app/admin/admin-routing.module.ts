import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const adminRoutes: Routes = [
    { path: '', component: AdminDashboardComponent},
    { path: 'new', component: NewProductFormComponent},
    { path: 'edit/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
