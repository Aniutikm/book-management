import { TestBed } from '@angular/core/testing';
import { BookServiceResolverService } from './book-service-resolver.service';
import { BookService } from './book.service';
import { BookGraphService } from './book-graph.service';
import { IBookService } from './book.interface';

describe('BookServiceResolverService', () => {
  let service: BookServiceResolverService;
  let bookService: BookService;
  let bookGraphService: BookGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookServiceResolverService,
        {
          provide: BookService,
          useValue: { /* mock implementation of BookService if necessary */ }
        },
        {
          provide: BookGraphService,
          useValue: { /* mock implementation of BookGraphService if necessary */ }
        }
      ]
    });
    service = TestBed.inject(BookServiceResolverService);
    bookService = TestBed.inject(BookService);
    bookGraphService = TestBed.inject(BookGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return BookService when isGraphQl is false', () => {
    service.isGraphQl = false;
    const resolvedService: IBookService = service.getBookService();
    expect(resolvedService).toBe(bookService);
  });

  it('should return BookGraphService when isGraphQl is true', () => {
    service.isGraphQl = true;
    const resolvedService: IBookService = service.getBookService();
    expect(resolvedService).toBe(bookGraphService);
  });
});
