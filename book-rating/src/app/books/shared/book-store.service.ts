import { BookResponse } from './book-response';
import { delay, map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable()
export class BookStoreService {

  api = 'http://api.angular.schule/secure';

  constructor(private http: HttpClient) { }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but goldie', 3),
      new Book('222', 'React', 'Ein anderes Framework', 4)
    ];
  }

  getAll(): Observable<Book[]> {
    return this.http.get<BookResponse[]>(`${this.api}/books`).pipe(
      retry(3),
      map(rawBooks => this.convertRawToBooks(rawBooks))
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookResponse>(`${this.api}/book/${isbn}`).pipe(
      retry(3),
      map(b => Book.fromObj(b)),
      delay(2000) // nur für Debugging
    );
  }

  create(book: Book): Observable<any> {
    return this.http.post(`${this.api}/book`, book, { responseType: 'text' });
  }

  private convertRawToBooks(rawBooks: BookResponse[]) {
    // Achtung: Array.map()
    return rawBooks.map(b => Book.fromObj(b));
  }

}
