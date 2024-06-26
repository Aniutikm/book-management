import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { IBookService } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService implements IBookService{
  private readonly restApiUrl = 'http://localhost:8080/api/v1/Books'; // Placeholder REST API URL

  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.restApiUrl);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.restApiUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.restApiUrl, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.restApiUrl}/${book.id}`, book);
  }

  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.restApiUrl}/${id}`);
  }
}
