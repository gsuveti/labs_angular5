import { TestBed, inject } from '@angular/core/testing';

import { PizzaFileService } from './pizza-file.service';

describe('PizzaFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaFileService]
    });
  });

  it('should be created', inject([PizzaFileService], (service: PizzaFileService) => {
    expect(service).toBeTruthy();
  }));
});
