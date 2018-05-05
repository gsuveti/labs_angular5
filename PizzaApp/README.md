# Modules: lazy loading

1. remove eager loaded PizzaModule and CustomerModule from app.module
2. app-routing.module: lazy load PizzaModule and CustomerModule
```angular2html
const routes: Routes = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {path: 'pizzas', loadChildren: './pizza/pizza.module#PizzaModule'},
  {path: 'customers', loadChildren: './customer/customer.module#CustomerModule'}
];
```
3. update pizza and customer routes
```angular2html
const routes: Routes = [
  {path: '', component: PizzaListComponent},
  {path: ':id', component: PizzaDetailsComponent}
];
```
```angular2html
const routes: Routes = [
  {path: '', component: CustomerListComponent},
  {path: ':id', component: CustomerDetailsComponent}
];
```
