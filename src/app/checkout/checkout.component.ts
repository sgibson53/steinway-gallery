import { Component, OnInit, ViewChild } from '@angular/core';
import { ShippingInformation } from '../shared/models/shipping-information.model';
import { STATES } from '../shared/models/states';

import * as phone from 'libphonenumber-js';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public shippingInfo: ShippingInformation;
  public formattedNumber = '';
  public states;
  @ViewChild('phoneInput') phoneInput;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit() {
    this.shippingInfo = new ShippingInformation();
    this.states = STATES;
  }

  public parsePhoneNumber(number, e) {
    if (e.key !== 'Backspace') {
      this.formattedNumber = new phone.AsYouType('US').input(number);
      const plainTextNumber = phone.parseNumber(number, 'US').phone;
      this.shippingInfo.phone = plainTextNumber ? plainTextNumber : '';
    }
  }

  onSubmit() {
    this.shoppingCartService.emptyShoppintCart();
    this.router.navigate(['/success']);
  }

}
