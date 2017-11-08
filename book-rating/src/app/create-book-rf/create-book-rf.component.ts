import { Book } from './../shared/book';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'br-create-book-rf',
  templateUrl: './create-book-rf.component.html',
  styleUrls: ['./create-book-rf.component.scss']
})
export class CreateBookRfComponent implements OnInit {

  form: FormGroup;

  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }

  addBook() {
    const newBook = new Book(
      this.form.value.isbn,
      this.form.value.title,
      this.form.value.description
    );
    this.bookCreated.emit(newBook);
    this.form.reset();
  }

}
