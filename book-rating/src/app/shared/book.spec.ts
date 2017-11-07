import { Book } from './book';

describe('Book', () => {
  let book: Book;

  beforeEach(() => {
    book = new Book('', '', '');
  });

  it('should create an instance', () => {
    expect(new Book('', '', '')).toBeTruthy();
  });

  it('should rate a book up', () => {
    book.rating = 2;
    book.rateUp();
    expect(book.rating).toBe(3);
  });

  it('should rate a book down', () => {
    book.rating = 2;
    book.rateDown();
    expect(book.rating).toBe(1);
  });

  it('should not be allowed to have rating greater than 5', () => {
    book.rating = 5;
    book.rateUp();
    expect(book.rating).toBe(5);
  });

  it('should not be allowed to have rating smaller than 1', () => {
    book.rating = 1;
    book.rateDown();
    expect(book.rating).toBe(1);
  });

});
