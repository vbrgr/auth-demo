import { TestBed, inject } from '@angular/core/testing';

import { DeleteService } from './delete.service';

describe('DeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteService]
    });
  });

  it('should be created', inject([DeleteService], (service: DeleteService) => {
    expect(service).toBeTruthy();
  }));
});
