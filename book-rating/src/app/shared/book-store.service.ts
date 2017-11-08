import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable()
export class BookStoreService {

  constructor() { }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but goldie', 3),
      new Book('222', 'React', 'Ein anderes Framework', 4)
    ];
  }

}
