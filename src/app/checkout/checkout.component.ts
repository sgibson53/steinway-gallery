import { Component, OnInit, ViewChild } from '@angular/core';
import { ShippingInformation } from '../shared/models/shipping-information.model';

import * as phone from 'libphonenumber-js';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public shippingInfo: ShippingInformation;
  public formattedNumber = '';
  @ViewChild('phoneInput') phoneInput;
 

  constructor() { }

  ngOnInit() {
    this.shippingInfo = new ShippingInformation();
  }

  public parsePhoneNumber(number, e) {
    if (e.key !== 'Backspace') {
      this.formattedNumber = new phone.AsYouType('US').input(number);
      this.shippingInfo.phone = number;
    }
  }

}
