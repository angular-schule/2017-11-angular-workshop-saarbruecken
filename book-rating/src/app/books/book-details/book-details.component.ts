import { Observable } from 'rxjs/Observable';
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

  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService
  ) { }

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      pluck('isbn'),
      switchMap((isbn: string) => this.bs.getSingle(isbn))
    );
  }

}
