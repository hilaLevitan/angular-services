import { TestBed } from '@angular/core/testing';

import { IngService } from './ing.service';

describe('IngService', () => {
  let service: IngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
