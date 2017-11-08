import { Book } from './../shared/book';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'br-create-book-tdf',
  templateUrl: './create-book-tdf.component.html',
  styleUrls: ['./create-book-tdf.component.scss']
})
export class CreateBookTdfComponent implements OnInit {

  book = Book.empty();

  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  addBook() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
  }

}
