import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { componentDestroyed } from 'ng2-rx-componentdestroyed';
import 'rxjs/add/operator/takeUntil';
import { CartItem } from '../shared/models/cart-item.model';
import { MatTableDataSource } from '@angular/material';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  public displayedColumns = ['product', 'quantity', 'price'];
  public cartItems: CartItem[];
  public dataSource;
  public numItemsInCart: number;
  public totalPrice: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getCartItems().then(items$ => {
      items$.takeUntil(componentDestroyed(this)).subscribe(
        (items: CartItem[]) => this.dataSource = new MatTableDataSource(items));
    });

    this.shoppingCartService.getNumberOfItemsInCart().then(items$ => {
      items$.takeUntil(componentDestroyed(this)).subscribe((listOfCartItems: CartItem[]) => {
        if (listOfCartItems) {
          this.numItemsInCart = listOfCartItems.reduce((acc, el) => acc + el.quantity, 0);
          this.totalPrice = listOfCartItems.reduce((acc, el) => acc + el.quantity * el.product.price, 0);
        }
      });
    });
  }

  public increaseQuantity(product: Product) {
    this.shoppingCartService.addToCart(product);
  }

  public decreaseQuantity(product: Product) {
    this.shoppingCartService.removeFromCart(product);
  }

  public emptyShoppingCart() {
    this.shoppingCartService.emptyShoppintCart();
  }

  ngOnDestroy() {
    // Necessary from ng2-rx-componentdestroyed
  }

}
