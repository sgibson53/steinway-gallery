import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnChanges {

  @Input() products;
  @Input() filter: string;
  public filteredProducts = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.products && changes.products.currentValue) {
      this.filteredProducts = changes.products.currentValue;
    }
    if (changes.filter && changes.filter.currentValue && !changes.filter.firstChange) {
      this.filterProducts(changes.filter.currentValue);
    }
  }

  filterProducts(filter) {
    if (filter === 'All Brands') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.brand === filter);
    }
  }

  public addToCart(product: Product) {
    this.shoppingCartService.addToCart(product);
  }

}
