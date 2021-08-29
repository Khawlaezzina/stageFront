import { TestBed } from '@angular/core/testing';

import { TechnicienAuthGuardService } from './technicien-auth-guard.service';

describe('TechnicienAuthGuardService', () => {
  let service: TechnicienAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicienAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
