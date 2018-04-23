import {Injectable, Provider} from '@angular/core';
import {PIZZAS} from "./pizza.data";
import {IPizza, IReview} from "./pizza.model";
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class PizzaFileService implements IPizzaService {

  constructor() {
  }

  getPizza(id: string): Observable<IPizza> {
    return Observable.of(PIZZAS.find(pizza => pizza._id === id));
  }

  getPizzas(): Observable<Array<IPizza>> {
    return Observable.create(observer => {
      observer.next(PIZZAS);
      observer.complete();
    });
  }

  addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    pizza.reviews.push(review);
    return Observable.of(pizza);
  }
}


export const PizzaServiceProvider: Provider = {
  provide: PIZZA_SERVICE,
  useClass: PizzaFileService
};
