import { TestBed } from '@angular/core/testing';

import { PropertyCategoriesService } from './property-categories.service';

describe('PropertyCategoriesService', () => {
  let service: PropertyCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
