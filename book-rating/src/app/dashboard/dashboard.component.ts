import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor() {}

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but goldie', 3)
    ];

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
