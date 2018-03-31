import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      date: new Date().getTime()
    });
  }

  public async addToCart(product: Product) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(cartId, product.dbid);
    item$.snapshotChanges().take(1).subscribe(res => {
      // will effectively perform set if item does not exist
      item$.update({product: product, quantity: (res.key ? res.payload.val().quantity : 0) + 1});
    });
  }

  public removeFromCart(product: Product) {
    const cartId = localStorage.getItem('cartId');
    if (cartId) { // If no cart, no sense removing
      const item$ = this.getItem(cartId, product.dbid);
      item$.snapshotChanges().take(1).subscribe(res => {
        const currentQuantity = res.payload.val().quantity;

        if (currentQuantity > 1) {
          item$.update({quantity: currentQuantity - 1});
        } else {
          item$.remove();
        }
      });
    }
  }

  public async getNumberOfItemsInCart() {
    const cartId = await this.getOrCreateCartId();
    return this.getListOfItems(cartId).valueChanges();
  }

  public async getCartItems() {
    const cartId = await this.getOrCreateCartId();
    return this.db.list(`/shopping-carts/${cartId}/items`).valueChanges();
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object(`/shopping-carts/${cartId}/items/${productId}`);
  }

  private getListOfItems(cartId: string) {
    return this.db.list(`/shopping-carts/${cartId}/items`);
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
