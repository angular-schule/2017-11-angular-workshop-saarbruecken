import { Book } from './../shared/book';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let comp: BookComponent;

  beforeEach(() => {
    comp = new BookComponent();
  });

  it('rateUp() should forward call to Book model', () => {
    comp.book = {
      rateUp: () => {},
    } as Book;

    spyOn(comp.book, 'rateUp');

    comp.rateUp();
    expect(comp.book.rateUp).toHaveBeenCalled();
  });

  it('rating a book should emit event', () => {
    comp.book = {
      isbn: '123',
      title: 'abc',
      rateUp: () => {}
    } as Book;

    comp.rated.subscribe(b => {
      expect(b).toBe(comp.book);
    });

    comp.rateUp();
  });
});
