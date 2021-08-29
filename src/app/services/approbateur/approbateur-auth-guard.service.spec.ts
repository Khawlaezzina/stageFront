import { TestBed } from '@angular/core/testing';

import { ApprobateurAuthGuardService } from './approbateur-auth-guard.service';

describe('ApprobateurAuthGuardService', () => {
  let service: ApprobateurAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprobateurAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
