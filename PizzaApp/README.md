# Modules: eager loading


1. create pizza and customer modules with routing

```angular2html
ng g m pizza --routing
```

```angular2html
ng g m customer --routing
```

2.a move components and providers in pizza.module

```angular2html
@NgModule({
  imports: [
    CommonModule,
    PizzaRoutingModule,
    FormsModule
  ],
  declarations: [
    TabsComponent,
    ReviewsComponent,
    PizzaListComponent,
    IngredientsComponent,
    ExtrasComponent,
    PizzaDetailsComponent
  ],
  providers: [PizzaServiceProvider]
})
export class PizzaModule {
}

```
2.b move routes in pizza-routing.module
```angular2html
const routes: Routes = [{
  path: 'pizzas',
  children: [
    {path: '', component: PizzaListComponent},
    {path: ':id', component: PizzaDetailsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule {
}
```
3.a move components and providers in customer.module
```angular2html
@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerListComponent, CustomerDetailsComponent
  ],
  providers: [CustomerServiceProvider],
})
export class CustomerModule {
}
```
3.b move routes in customer-routing.module
```angular2html
const routes: Routes = [
  {
    path: 'customers',
    children: [
      {path: '', component: CustomerListComponent},
      {path: ':id', component: CustomerDetailsComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
```

4. update app.module
```
const ROUTES = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    HttpClientModule,
    CommonsModule,
    PizzaModule,
    CustomerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```
### BONUS: create app-routing.module


