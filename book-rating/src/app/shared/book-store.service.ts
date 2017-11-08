import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but goldie', 3),
      new Book('222', 'React', 'Ein anderes Framework', 4)
    ];
  }

  getAll(): Observable<Book[]> {
    return this.http.get<any[]>('http://api.angular.schule/books').pipe(
      retry(3),
      map(rawBooks => this.convertRawToBooks(rawBooks))
    );
  }

  private convertRawToBooks(rawBooks: any[]) {
    // Achtung: Array.map()
    return rawBooks.map(b => Book.fromObj(b));
  }

}
