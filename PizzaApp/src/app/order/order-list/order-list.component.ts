import {Component, Inject, OnInit} from '@angular/core';
import {ICustomer} from '../customer.model';
import {IPizza} from '../pizza.model';
import {IOrderService, ORDER_SERVICE} from '../order.service';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  customer: ICustomer;
  pizzas: IPizza[];


  constructor(@Inject(ORDER_SERVICE) private orderService: IOrderService) {
  }

  ngOnInit() {
    this.orderService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
    });

    this.customer = {
      name: '',
      phone: '',
      email: '',
      address: ''
    };


  }

}
