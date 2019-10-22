import { TestBed } from '@angular/core/testing';

import { StockageterrainService } from './stockageterrain.service';

describe('StockageterrainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockageterrainService = TestBed.get(StockageterrainService);
    expect(service).toBeTruthy();
  });
});
