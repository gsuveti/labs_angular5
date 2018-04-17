import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsComponent} from "./pizza-list/tabs/tabs.component";
import {FormsModule} from "@angular/forms";
import {ReviewsComponent} from "./pizza-list/tabs/reviews/reviews.component";
import {PizzaServiceProvider} from "./pizza-list/pizza-file.service";
import {HttpClientModule} from "@angular/common/http";
import {PizzaListComponent} from './pizza-list/pizza-list.component';
import {IngredientsComponent} from './pizza-list/tabs/ingredients/ingredients.component';
import {ExtrasComponent} from './pizza-list/tabs/extras/extras.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent,
    PizzaListComponent,
    IngredientsComponent,
    ExtrasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PizzaServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
