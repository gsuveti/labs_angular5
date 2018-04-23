# Http put

##Send Data to the Server

1. addReview method in pizza rest service

```$xslt
addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    const url: string = this.url + '/addReview/' + pizza._id;
    return this.http.put<IPizza>(url, review);
}

```

2. add _id field in IPizza interface(use Alt+Enter). Make it optional.

3. addReview in pizza.service.ts
 
```$xslt
addReview(pizza: IPizza, review: IReview): Observable<IPizza>;
```

4. addReview in pizza-rest.service.ts

```$xslt
 addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    const url: string = this.url + '/addReview/' + pizza._id;
    return this.http.put<IPizza>(url, review);
  }
```

and addReview in pizza-file.service.ts

```$xslt
  addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    pizza.reviews.push(review);
    return Observable.of(pizza);
  }
```

##The review needs to know about the pizza now

5. in reviews.component.ts

```$xslt
@Input()
private pizza: IPizza;
```
and
```$xslt
 public onSubmit() {
    this.newReview.createdOn = new Date().getMilliseconds();
    this.pizzaService.addReview(this.pizza, this.newReview)
      .subscribe(pizza => {
        this.pizza = pizza;
        this.newReview = {};
      });

    this.newReview = {};
  }
```

6. reviews.component.html
```
<blockquote *ngFor="let review of reviews">

<blockquote *ngFor="let review of pizza.reviews">
```

7. tabs.component.html

change
```$xslt
<reviews *ngIf="isSelected(3)" [reviews]="pizza.reviews"></reviews>
```
to
```
<reviews *ngIf="isSelected(3)" [pizza]="pizza"></reviews>
```

##Events – the solution for coupling

8. reviews.component.ts
```$xslt
  @Input()
  private reviews: Array<IReview>;
```
```$xslt
@Output()
  private addReview = new EventEmitter<Review>();

```
```$xslt
 public onSubmit() {
    this.newReview.createdOn = new Date().getMilliseconds();
    this.addReview.emit(this.newReview);
    this.newReview = {};
  }

```

9. reviews.component.html

change
```
<blockquote *ngFor="let review of pizza.reviews">
```
to
```
<blockquote *ngFor="let review of reviews">
```

10. tabs.component.ts
```$xslt

  public addReview(review: IReview) {
    this.pizzaService.addReview(this.pizza, review)
      .subscribe(pizza => this.pizza = pizza);
  }
```

11. tabs.component.html

change
```$xslt
<reviews *ngIf="isSelected(3)" [pizza]="pizza"></reviews>
```
to 
```
<reviews *ngIf="isSelected(3)" 
         [reviews]="pizza.reviews" 
         (addReview)="addReview($event)">
</reviews>
```
