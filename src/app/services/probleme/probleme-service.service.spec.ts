import { TestBed } from '@angular/core/testing';

import { ProblemeServiceService } from './probleme-service.service';

describe('ProblemeServiceService', () => {
  let service: ProblemeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
