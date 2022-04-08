import { TestBed } from '@angular/core/testing';

import { SpecalityService } from './specality.service';

describe('SpecalityService', () => {
  let service: SpecalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
