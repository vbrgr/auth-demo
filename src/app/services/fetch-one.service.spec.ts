import { TestBed, inject } from '@angular/core/testing';

import { FetchOneService } from './fetch-one.service';

describe('FetchOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchOneService]
    });
  });

  it('should be created', inject([FetchOneService], (service: FetchOneService) => {
    expect(service).toBeTruthy();
  }));
});
