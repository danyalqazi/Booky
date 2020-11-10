import { TestBed } from '@angular/core/testing';

import { BookiiiService } from './bookiii.service';

describe('BookiiiService', () => {
  let service: BookiiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookiiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
