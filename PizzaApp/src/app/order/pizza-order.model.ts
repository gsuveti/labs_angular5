/**
 * Created by marius on 15/03/2017.
 */
import {IPizza} from './pizza.model';

export interface IPizzaOrder {
  _id?: string;
  pizza: IPizza;
  quantity: number;
}
