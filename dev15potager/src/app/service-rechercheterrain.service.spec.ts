import { TestBed } from '@angular/core/testing';

import { ServiceRechercheterrainService } from './service-rechercheterrain.service';

describe('ServiceRechercheterrainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceRechercheterrainService = TestBed.get(ServiceRechercheterrainService);
    expect(service).toBeTruthy();
  });
});
