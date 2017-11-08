import { BookStoreService } from '../shared/book-store.service';
import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.books = this.bs.getAllStatic();

    /* setTimeout(() => {
      this.books = ['React'];
    }, 2000); */
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    this.books.push(book);
    this.reorderBooks();

  }

}
