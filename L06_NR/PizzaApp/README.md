# Http put

##Send Data to the Server

1. addReview method in pizza rest service

```$xslt
addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    const url: string = this.url + '/addReview/' + pizza._id;
    return this.http.put<IPizza>(url, review);
}

```

2. add _id field in IPizza interface(use Alt+Enter). Make it optional

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

5.addReview in pizza-file.service.ts

```$xslt
  addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    pizza.reviews.push(review);
    return Observable.of(pizza);
  }
```

##The review needs to know about the pizza now

6. in reviews.component.ts

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
7. reviews.component.html
```
<blockquote *ngFor="let review of reviews">

<blockquote *ngFor="let review of pizza.reviews">
```
