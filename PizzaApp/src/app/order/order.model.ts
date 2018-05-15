/**
 * Created by marius on 15/03/2017.
 */
import {ICustomer} from './customer.model';
import {IPizza} from './pizza.model';

export interface IOrder {
  _id?: string;
  customer: ICustomer;
  pizzas: IPizza[];
}
