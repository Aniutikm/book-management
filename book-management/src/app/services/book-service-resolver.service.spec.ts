import { TestBed } from '@angular/core/testing';

import { BookServiceResolverService } from './book-service-resolver.service';

describe('BookServiceResolverService', () => {
  let service: BookServiceResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookServiceResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
