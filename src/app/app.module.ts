import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppRoutingModule } from './app-routing.module';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

// Angular Material
import { MatButtonModule } from '@angular/material';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    LoginComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    SimpleNotificationsModule.forRoot(),
    CoreModule,
    MatButtonModule,
    AppRoutingModule
  ],
  entryComponents: [DeleteDialogComponent],
  providers: [AngularFireAuth, AngularFireDatabase, AuthService, AuthGuard, UserService, AdminAuthGuard, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
