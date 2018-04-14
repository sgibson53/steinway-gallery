import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ShippingInformation } from '../shared/models/shipping-information.model';
import { STATES } from '../shared/models/states';

import * as phone from 'libphonenumber-js';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { Router } from '@angular/router';
import { OrdersService } from '../shared/services/orders.service';
import { componentDestroyed } from 'ng2-rx-componentdestroyed';
import { MatTableDataSource } from '@angular/material';
import { CartItem } from '../shared/models/cart-item.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  public shippingInfo: ShippingInformation;
  public formattedNumber = '';
  public states;
  public tableData: any;
  public totalPrice: number;
  public cartItems: CartItem[];
  @ViewChild('phoneInput') phoneInput;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router, private ordersService: OrdersService) { }

  ngOnInit() {
    this.shippingInfo = new ShippingInformation();
    this.states = STATES;

    this.shoppingCartService.getCartItems().then(items$ => {
      items$.takeUntil(componentDestroyed(this)).subscribe(
        (items: CartItem[]) => {
          this.cartItems = items;
          this.tableData = new MatTableDataSource(items);
          this.totalPrice = items.reduce((acc, el) => acc + el.quantity * el.product.price, 0);
        });
    });
  }

  public parsePhoneNumber(number, e) {
    if (e.key !== 'Backspace') {
      this.formattedNumber = new phone.AsYouType('US').input(number);
      const plainTextNumber = phone.parseNumber(number, 'US').phone;
      this.shippingInfo.phone = plainTextNumber ? plainTextNumber : '';
    }
  }

  onSubmit() {
    this.ordersService.submitNewOrder({
      shippingInfo: this.shippingInfo,
      products: this.cartItems,
      totalPrice: this.totalPrice,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    });
    this.shoppingCartService.emptyShoppintCart();
    this.router.navigate(['/success']);
  }

  ngOnDestroy() {
    // Necessary from ng2-rx-componentdestroyed
  }

}
