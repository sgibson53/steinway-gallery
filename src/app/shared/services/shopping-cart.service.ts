import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from '../models/product.model';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      date: new Date().getTime()
    });
  }

  async addToCart(product: Product) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.db.object(`/shopping-carts/${cartId}/items/${product.dbid}`);
    item$.snapshotChanges().take(1).subscribe(res => {
      if (res.key) {
        item$.update({quantity: res.payload.val().quantity + 1});
      } else {
        item$.set({product: product, quantity: 1});
      }
    });
  }

  private getCart(cartId: string) {
    return this.db.object(`/shopping-carts/${cartId}`);
  }

  private async getOrCreateCartId() {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      return cartId;
    }

    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

}
