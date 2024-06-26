import { TestBed } from '@angular/core/testing';

import { BookGraphService } from './book-graph.service';

describe('BookGraphService', () => {
  let service: BookGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
