import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsComponent} from "./pizza/pizza-details/tabs/tabs.component";
import {FormsModule} from "@angular/forms";
import {ReviewsComponent} from "./pizza/pizza-details/tabs/reviews/reviews.component";
import {PizzaServiceProvider} from "./pizza/pizza-rest.service";
import {HttpClientModule} from "@angular/common/http";
import {PizzaListComponent} from './pizza/pizza-list/pizza-list.component';
import {IngredientsComponent} from './pizza/pizza-details/tabs/ingredients/ingredients.component';
import {ExtrasComponent} from './pizza/pizza-details/tabs/extras/extras.component';
import {PizzaDetailsComponent} from './pizza/pizza-details/pizza-details.component';
import {RouterModule} from "@angular/router";
import {CommonsModule} from "./commons/commons.module";


const PIZZA_ROUTES = [
  {
    path: 'pizzas',
    children: [
      {path: '', component: PizzaListComponent},
      {path: ':id', component: PizzaDetailsComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent,
    PizzaListComponent,
    IngredientsComponent,
    ExtrasComponent,
    PizzaDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(PIZZA_ROUTES),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonsModule
  ],
  providers: [PizzaServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
