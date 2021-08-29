import { TestBed } from '@angular/core/testing';

import { TechnicienAuthentificationService } from './technicien-authentification.service';

describe('TechnicienAuthentificationService', () => {
  let service: TechnicienAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicienAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
