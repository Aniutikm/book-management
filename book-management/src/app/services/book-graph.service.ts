import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { IBookService } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookGraphService implements IBookService {
  private readonly graphqlApiUrl = 'http://localhost:8080/graphql'; // Placeholder GraphQL API URL

  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    const query = `query {
      books{
        getAll{
          id, title, author, publishedDate, isbn
        }
      }
    }`;

    return this.http
      .post<any>(this.graphqlApiUrl, { query })
      .pipe(map((data) => data.data.books.getAll));
  }

  getBook(id: string): Observable<Book> {
    const query = `query {
      books {
        getById(id: "${id}") {
          id
          title
          author
          publishedDate
          isbn
        }
      }
    }`;

    return this.http
      .post<any>(this.graphqlApiUrl, { query })
      .pipe(map((data) => data.data.books.getById));
  }

  addBook(book: Book): Observable<Book> {
    const query = `mutation {
      books {
        add(
          command: {
            title: "${book.title}"
            author: "${book.author}"
            publishedDate: "${book.publishedDate}"
            isbn: "${book.isbn}"
          }
        ) {
          id
          title
          author
          publishedDate
          isbn
        }
      }
    }`;

    return this.http
      .post<any>(this.graphqlApiUrl, { query })
      .pipe(map((data) => data.data.books.add));
  }

  updateBook(book: Book): Observable<Book> {
    const query = `mutation {
      books {
        update(
          id: "${book.id}"
          request: {
            title: "${book.title}"
            author: "${book.author}"
            publishedDate: "${book.publishedDate}"
            isbn: "${book.isbn}"
          }
        ) {
          id
          title
          author
          publishedDate
          isbn
        }
      }
    }`;

    return this.http
      .post<any>(this.graphqlApiUrl, { query })
      .pipe(map((data) => data.data.books.update));
  }

  deleteBook(id: string): Observable<void> {
    const query = `mutation {
      books {
        delete(id: "${id}") {
          id
          title
          author
          publishedDate
          isbn
        }
      }
    }`;

    return this.http
      .post<any>(this.graphqlApiUrl, { query })
      .pipe(map((data) => data.data.books.delete));
  }
}
