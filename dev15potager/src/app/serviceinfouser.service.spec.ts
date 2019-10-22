import { TestBed } from '@angular/core/testing';

import { ServiceinfouserService } from './serviceinfouser.service';

describe('ServiceinfouserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceinfouserService = TestBed.get(ServiceinfouserService);
    expect(service).toBeTruthy();
  });
});
