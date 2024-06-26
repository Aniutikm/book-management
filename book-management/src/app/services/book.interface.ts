import { Observable } from "rxjs";
import { Book } from "../models/book.model";

export interface IBookService {
    getBooks(): Observable<Book[]>;
    
      getBook(id: string): Observable<Book>;
    
      addBook(book: Book): Observable<Book>;
    
      updateBook(book: Book): Observable<Book>;
    
      deleteBook(id: string): Observable<void>;
}