/**
 * Created by marius on 15/03/2017.
 */
import {ICustomer} from './customer.model';
import {IPizzaOrder} from './pizza-order.model';

export interface IOrder {
  _id?: string;
  customer: ICustomer;
  pizzaOrders: IPizzaOrder[];
}
