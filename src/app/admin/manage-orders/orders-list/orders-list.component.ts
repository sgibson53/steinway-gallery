import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../../../shared/models/order.model';
import { OrdersService } from '../../../shared/services/orders.service';
import { componentDestroyed } from 'ng2-rx-componentdestroyed';
import { NotificationsService } from 'angular2-notifications';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {
  public orders: Order[];
  public displayedColumns = ['id', 'name', 'date', 'total'];
  public dataSource;

  constructor(private ordersService: OrdersService, private notificationService: NotificationsService) { }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.ordersService.getAllOrders().takeUntil(componentDestroyed(this)).subscribe(orders => {
      this.orders = [];

      for (const prop in orders) {
        if (prop) {
          this.orders.push({
            ...orders[prop],
            id: prop
          });
        }
      }

      this.dataSource = new MatTableDataSource(this.orders);
    }, err => {
      this.notificationService.error('Could Not Retrieve Orders!', 'Please try again later.');
    });
  }

  ngOnDestroy() {
    // Necessary from ng2-rx-componentdestroyed
  }

}
