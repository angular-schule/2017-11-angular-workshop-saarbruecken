import { BookStoreService } from '../shared/book-store.service';
import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.bs.getAll()
      .subscribe(books => {
        this.books = books;
        this.reorderBooks();
      });
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    this.bs.create(book).pipe(
      switchMap(() => this.bs.getAll())
    )
    .subscribe(books => {
      this.books = books;
      this.reorderBooks();
    });
  }

}
