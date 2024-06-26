import { Injectable } from '@angular/core';
import { BookGraphService } from './book-graph.service';
import { IBookService } from './book.interface';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root',
})
export class BookServiceResolverService {
  isGraphQl: boolean = false;

  constructor(
    private readonly bookService: BookService,
    private readonly bookGraphService: BookGraphService
  ) {}
   getBookService(): IBookService {
    return this.isGraphQl ? this.bookGraphService : this.bookService;
  }
}
