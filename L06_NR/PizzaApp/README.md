# Router

- rename pizza-list folder to pizza

- create pizza-list folder in pizza

- move all pizza-list.* files in pizza-list folder

- change pizza-list.html
```$xslt
<div *ngFor='let pizza of pizzas' class='list'>
  <div *ngIf="!pizza.soldOut" class="card horizontal">
    <div class="card-image">
      <img height="90px" [src]="pizza.image">
    </div>
    <div class="card-content">
      <span class="card-title activator">{{pizza.name}} ({{pizza.weight}}) g - {{pizza.price | currency}}</span>
    </div>
  </div>
</div>

 
```
- generate pizza-details component

- change pizza-detail.component.html

```$xslt
<div *ngIf="pizza" id="pizza">
  <div class="card horizontal" *ngIf="!pizza.soldOut">
    <div class="card-image">
      <img height="190px" [src]="pizza.image">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <p class="card-title">
          {{pizza.name}} ({{pizza.weight}}) g
        </p>
        <p>{{pizza.price | currency}}</p>
        <p>{{pizza.ingredients}}</p>
      </div>
      <div class="card-action" *ngIf="pizza.canPurchase">
        <button id="add" name="add" class="btn"> Add to Cart</button>
      </div>
      <tabs [pizza]="pizza"></tabs>
    </div>
  </div>
</div>

```
- move tabs module in pizza-details


- configure pizza routes and import router module
```$xslt
const PIZZA_ROUTES = [
{
  path: ’pizza', children: [
    { path: '', component: PizzaListComponent },
    { path: ':id', component: PizzaDetailsComponent }
  ]
}
];

```

```$xslt
@NgModule({
  bootstrap: [AppComponent],
  imports: [RouterModule.forRoot(PIZZA_ROUTES)]
})
class AppModule {}

```
- add the router outlet in app.html

```$xslt
<router-outlet></router-outlet>
```

- generate commons module

- generate navigation service

```$xslt
export interface INavigationService {
  openPizza(id: string): Promise<boolean>;
  openPizzas(): Promise<boolean>;
}


@Injectable()
export class NavigationService implements INavigationService {
  constructor(private router: Router) {
  }
  openPizza(id: string) {
    return this.router.navigate(['pizzas', id]);
  }
  openPizzas() {
    return this.router.navigate(['pizzas']);
  }
}


export const NAVIGATION_SERVICE: InjectionToken<INavigationService> = new InjectionToken('NAVIGATION_SERVICE');
export const NavigationServiceProvider: Provider = {
  provide: NAVIGATION_SERVICE,
  useClass: NavigationService
};

```

- pizza-list.component.ts

- inject navigation service and navigate to detail
```$xslt
@Inject(NAVIGATION_SERVICE) private navigationService: INavigationService
```

```$xslt
 goToPizza(pizza: IPizza): Promise<boolean> {
    return this.navigationService.openPizza(pizza._id);
  }
```

- pizza-list.component.html
```$xslt
<div *ngFor='let pizza of pizzas' class='list'>
  <div *ngIf="!pizza.soldOut" class="card horizontal"  (click)="goToPizza(pizza)">
    <div class="card-image">
      <img height="90px" [src]="pizza.image">
    </div>
    <div class="card-content">
      <span class="card-title activator">{{pizza.name}} ({{pizza.weight}}) g - {{pizza.price | currency}}</span>
    </div>
  </div>
</div>

```


- fetch the pizza details based on the provided id
```$xslt
ngOnInit() {
    this.pizzaService.getPizza(this.navigationService.getParam(this.activatedRoute, 'id'))
      .subscribe(pizza => this.pizza = pizza);
  }
```
- add the Back button

```$xslt
<div *ngIf="pizza" id="pizza">
  <a class="btn-flat" (click)="goBack()"><i class="material-icons left">keyboard_arrow_left</i>Back</a>

  <div class="card horizontal" *ngIf="!pizza.soldOut">
    <div class="card-image">
      <img height="190px" [src]="pizza.image">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <p class="card-title">
          {{pizza.name}} ({{pizza.weight}}) g
        </p>
        <p>{{pizza.price | currency}}</p>
        <p>{{pizza.ingredients}}</p>
      </div>
      <div class="card-action" *ngIf="pizza.canPurchase">
        <button id="add" name="add" class="btn"> Add to Cart</button>
      </div>
      <tabs [pizza]="pizza"></tabs>
    </div>
  </div>
</div>

```
