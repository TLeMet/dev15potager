import { TestBed } from '@angular/core/testing';

import { ServicedemandeService } from './servicedemande.service';

describe('ServicedemandeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicedemandeService = TestBed.get(ServicedemandeService);
    expect(service).toBeTruthy();
  });
});
