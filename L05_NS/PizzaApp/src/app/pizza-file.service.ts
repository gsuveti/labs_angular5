import {Injectable, Provider} from '@angular/core';
import {PIZZAS} from "./app.data";
import {IPizza} from "./app.model";
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PizzaFileService implements IPizzaService {

  constructor() {
  }

  getPizzas(): Observable<Array<IPizza>> {
    return Observable.create(observer => {
      observer.next(PIZZAS);
      observer.complete();
    });
  }
}


export const PizzaServiceProvider: Provider = {
  provide: PIZZA_SERVICE,
  useClass: PizzaFileService
};
