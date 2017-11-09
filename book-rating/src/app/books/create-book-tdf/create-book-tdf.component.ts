import { Book } from './../shared/book';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'br-create-book-tdf',
  templateUrl: './create-book-tdf.component.html',
  styleUrls: ['./create-book-tdf.component.scss']
})
export class CreateBookTdfComponent implements OnInit {
  @ViewChild(NgForm) form: NgForm;
  // @ViewChild('form') form: NgForm;

  book = Book.empty();

  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  addBook() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.form.resetForm();
  }

}
