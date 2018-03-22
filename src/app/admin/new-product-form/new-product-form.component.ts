import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.scss']
})
export class NewProductFormComponent implements OnInit {

  public formLabel: string;
  public formSubLabel: string;
  public formDescription: string;
  public formPrice: number;
  public formUrl: string;

  public submitted = false;

  constructor(private notificationService: NotificationsService) { }

  ngOnInit() {
  }

  onSubmitForm() {
    this.submitted = true;
    console.log('submitted');
    this.notificationService.success('Awesome', 'Product successfully added');
  }

  get diagnostic() {
    return JSON.stringify({ label: this.formLabel, subLabel: this.formSubLabel, description: this.formDescription, price: this.formPrice, url: this.formUrl });
  }

}
