# Modules: preloading

1. preload all modules


```
@NgModule({
     imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
     exports: [RouterModule]
   })
   export class AppRoutingModule {
   }
```

2. custom preload

a. implement custom preloading strategy
```angular2html
@Injectable()
export class PreloadSelectedModulesService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return (route.data && route.data.preload) ? load() : of(null);
  }
}
```


b. provide it in app.module
```angular2html
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonsModule
  ],
  bootstrap: [AppComponent],
  providers: [PreloadSelectedModulesService]
})
export class AppModule {
}
```
c. use it in app-routing.module and mark the routes you want to preload
```angular2html
const routes: Routes = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {path: 'pizzas', loadChildren: './pizza/pizza.module#PizzaModule', data: {preload: true}},
  {path: 'customers', loadChildren: './customer/customer.module#CustomerModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadSelectedModulesService})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
```


