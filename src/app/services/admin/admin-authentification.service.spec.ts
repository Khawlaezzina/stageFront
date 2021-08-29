import { TestBed } from '@angular/core/testing';

import { AdminAuthentificationService } from './admin-authentification.service';

describe('AdminAuthentificationService', () => {
  let service: AdminAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
