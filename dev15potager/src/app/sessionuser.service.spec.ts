import { TestBed } from '@angular/core/testing';

import { SessionuserService } from './sessionuser.service';

describe('SessionuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionuserService = TestBed.get(SessionuserService);
    expect(service).toBeTruthy();
  });
});
