import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Order } from '../models/order.model';

@Injectable()
export class OrdersService {

  constructor(private db: AngularFireDatabase) { }

  getAllOrders(): Observable<any> {
    return this.db.object('/orders').valueChanges();
  }

  submitNewOrder(newOrder: Order) {
    return this.db.list('/orders').push(newOrder);
  }

  deleteOrder(id: string) {
    return this.db.object(`/orders/${id}`).remove();
  }
}
