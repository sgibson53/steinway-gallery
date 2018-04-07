import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartItem } from '../../shared/models/cart-item.model';
import { componentDestroyed } from 'ng2-rx-componentdestroyed';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss']
})
export class CheckoutSummaryComponent implements OnInit, OnDestroy {

  public displayedColumns = ['product', 'price'];
  public cartItems: CartItem[];
  public dataSource;
  public totalPrice: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getCartItems().then(items$ => {
      items$.takeUntil(componentDestroyed(this)).subscribe(
        (items: CartItem[]) => {
          this.dataSource = new MatTableDataSource(items);
          this.totalPrice = items.reduce((acc, el) => acc + el.quantity * el.product.price, 0);
        });
    });
  }

  ngOnDestroy() {
    // Necessary from ng2-rx-componentdestroyed
  }

}
