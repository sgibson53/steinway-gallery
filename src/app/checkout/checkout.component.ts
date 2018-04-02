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
  @ViewChild('phone') phoneInput;
 

  constructor() { }

  ngOnInit() {
    this.shippingInfo = new ShippingInformation();
  }

  public parseNumber(number) {
    this.phoneInput.value = new phone.AsYouType('US').input(number);
  }

}
