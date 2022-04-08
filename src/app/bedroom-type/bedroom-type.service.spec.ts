import { TestBed } from '@angular/core/testing';

import { BedroomTypeService } from './bedroom-type.service';

describe('BedroomTypeService', () => {
  let service: BedroomTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedroomTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
