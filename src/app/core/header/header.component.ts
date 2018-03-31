import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { CartItem } from '../../shared/models/cart-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public appUser: any;
  public numItemsInCart: number;
  public shoppingCart$: Subscription;

  constructor(public authService: AuthService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    this.shoppingCartService.getNumberOfItemsInCart().then(cart$ => {
      this.shoppingCart$ = cart$.subscribe((listOfCartItems: CartItem[]) => {
        if (listOfCartItems) {
          this.numItemsInCart = listOfCartItems.reduce((acc, el) => acc + el.quantity, 0);
        }
      });
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.shoppingCart$.unsubscribe();
  }

}
