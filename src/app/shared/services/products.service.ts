import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  getAllProducts(): Observable<any> {
    return this.db.object('/products').valueChanges();
  }

}
