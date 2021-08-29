import { TestBed } from '@angular/core/testing';

import { ApprobateurAuthentificationService } from './approbateur-authentification.service';

describe('ApprobateurAuthentificationService', () => {
  let service: ApprobateurAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprobateurAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
