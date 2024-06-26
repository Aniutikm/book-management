import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Book } from '../../models/book.model';

ChangeDetectionStrategy.OnPush;

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() book!: Book;
  @Output() delete = new EventEmitter<string>();

  onDelete(): void {
    this.delete.emit(this.book.id);
  }

}
