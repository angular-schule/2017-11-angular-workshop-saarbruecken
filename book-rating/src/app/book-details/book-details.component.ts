import { map, pluck, switchMap } from 'rxjs/operators';
import { Book } from './../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService
  ) { }

  ngOnInit() {
    /*this.route.params.subscribe(p => {
      this.bs.getSingle(p.isbn).subscribe(b => this.book = b);
    });*/
    this.route.params.pipe(
      pluck('isbn'), // Alternative: map(p => p.isbn)
      switchMap((isbn: string) => this.bs.getSingle(isbn))
    )
    .subscribe(b => this.book = b);

    // Alternative: this.isbn = this.route.snapshot.params.isbn;
  }

}
