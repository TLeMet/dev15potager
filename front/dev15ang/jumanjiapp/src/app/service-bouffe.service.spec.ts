import { TestBed } from '@angular/core/testing';

import { ServiceBouffeService } from './service-bouffe.service';

describe('ServiceBouffeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBouffeService = TestBed.get(ServiceBouffeService);
    expect(service).toBeTruthy();
  });
});
