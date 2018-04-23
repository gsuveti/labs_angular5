import { TestBed, inject } from '@angular/core/testing';

import { PizzaRestService } from './pizza-rest.service';

describe('PizzaRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaRestService]
    });
  });

  it('should be created', inject([PizzaRestService], (service: PizzaRestService) => {
    expect(service).toBeTruthy();
  }));
});
