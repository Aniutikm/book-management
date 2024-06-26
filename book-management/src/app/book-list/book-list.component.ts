import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Book } from '../models/book.model';
import { BookServiceResolverService } from '../services/book-service-resolver.service';
import { BookComponent } from './book/book.component';

ChangeDetectionStrategy.OnPush;
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule, BookComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  isGraphQl: boolean = false;

  constructor(private readonly bookServiceResolverService : BookServiceResolverService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  toggleApi(): void {
    this.isGraphQl = !this.isGraphQl;
    this.bookServiceResolverService.isGraphQl = this.isGraphQl;
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookServiceResolverService.getBookService().getBooks().subscribe((data: Book[]) => {
    debugger;
      this.books = data;
    });
  }

  deleteBook(id: string): void {
    this.bookServiceResolverService.getBookService().deleteBook(id).subscribe(() => {
      this.loadBooks();
    });
  }

}
