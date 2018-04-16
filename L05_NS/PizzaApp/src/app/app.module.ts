import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TabsComponent} from "./tabs/tabs.component";
import {FormsModule} from "@angular/forms";
import {PizzaService} from './pizza.service';
import {ReviewsComponent} from "./reviews/reviews.component";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
