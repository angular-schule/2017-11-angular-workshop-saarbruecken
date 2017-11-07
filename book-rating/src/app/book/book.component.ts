import { Book } from './../shared/book';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() rated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

}
