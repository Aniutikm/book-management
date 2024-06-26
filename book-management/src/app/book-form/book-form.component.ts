import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book.model';
import { BookServiceResolverService } from '../services/book-service-resolver.service';

ChangeDetectionStrategy.OnPush;
@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  bookId: string | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly bookServiceResolverService: BookServiceResolverService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publishedDate: ['', Validators.required],
      isbn: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['id'];
    if (this.bookId) {
      this.bookServiceResolverService.getBookService().getBook(this.bookId).subscribe((book: Book) => {
        this.bookForm.patchValue(book);
      });
    }
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const book: Book = this.bookForm.value;
      if (this.bookId) {
        book.id = this.bookId;
        this.bookServiceResolverService.getBookService().updateBook(book).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.bookServiceResolverService.getBookService().addBook(book).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }
}
