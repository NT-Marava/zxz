import { TestBed } from '@angular/core/testing';

import { RequesthandlerService } from './requesthandler.service';

describe('RequesthandlerService', () => {
  let service: RequesthandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequesthandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
