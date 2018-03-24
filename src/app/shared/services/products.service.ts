import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  getAllProducts(): Observable<any> {
    return this.db.object('/products').valueChanges();
  }

  saveNewProduct(newProduct: Product) {
    return this.db.list('/products').push(newProduct);
  }

}
