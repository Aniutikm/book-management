import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookService } from './book.service';
import { Book } from '../models/book.model';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  const mockBook: Book = { id: '1', title: 'Book 1', author: 'Author 1', publishedDate: '2020-01-01', isbn: '1234567890' };
  const mockBooks: Book[] = [
    { id: '1', title: 'Book 1', author: 'Author 1', publishedDate: '2020-01-01', isbn: '1234567890' },
    { id: '2', title: 'Book 2', author: 'Author 2', publishedDate: '2021-01-01', isbn: '0987654321' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch books', () => {
    service.getBooks().subscribe((books) => {
      expect(books).toEqual(mockBooks);
    });

    const req = httpMock.expectOne(`${service['restApiUrl']}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockBooks);
  });

  it('should fetch a single book by id', () => {
    service.getBook('1').subscribe((book) => {
      expect(book).toEqual(mockBook);
    });

    const req = httpMock.expectOne(`${service['restApiUrl']}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockBook);
  });

  it('should add a new book', () => {
    service.addBook(mockBook).subscribe((book) => {
      expect(book).toEqual(mockBook);
    });

    const req = httpMock.expectOne(`${service['restApiUrl']}`);
    expect(req.request.method).toBe('POST');
    req.flush(mockBook);
  });

  it('should update an existing book', () => {
    service.updateBook(mockBook).subscribe((book) => {
      expect(book).toEqual(mockBook);
    });

    const req = httpMock.expectOne(`${service['restApiUrl']}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockBook);
  });

  it('should delete a book by id', () => {
    service.deleteBook('1').subscribe((response) => {
      expect(response).toBeUndefined();
    });

    const req = httpMock.expectOne(`${service['restApiUrl']}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
