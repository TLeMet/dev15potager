import { TestBed } from '@angular/core/testing';

import { ServiceTerrainService } from './service-terrain.service';

describe('ServiceTerrainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTerrainService = TestBed.get(ServiceTerrainService);
    expect(service).toBeTruthy();
  });
});
