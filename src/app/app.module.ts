import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatModule } from './mat.module';

// 3rd Party Modules
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AngularSvgIconModule } from 'angular-svg-icon';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

// My Modules
import { CoreModule } from './core/core.module';

// My Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuard } from './admin-auth-guard.service';

// My Services
import { ProductsService } from './shared/services/products.service';
import { DeleteDialogComponent } from './shared/components/delete-dialog/delete-dialog.component';
import { CatalogComponent } from './home/catalog/catalog.component';
import { ShoppingCartService } from './shared/services/shopping-cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutSummaryComponent } from './checkout/checkout-summary/checkout-summary.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrdersService } from './shared/services/orders.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    LoginComponent,
    DeleteDialogComponent,
    CatalogComponent,
    CheckoutComponent,
    CheckoutSummaryComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    AngularFireModule.initializeApp(environment.firebase),
    SimpleNotificationsModule.forRoot(),
    CoreModule,
    AngularSvgIconModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  entryComponents: [DeleteDialogComponent],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    ProductsService,
    ShoppingCartService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
