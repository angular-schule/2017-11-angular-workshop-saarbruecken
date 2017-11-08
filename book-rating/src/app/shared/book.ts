export class Book {

  // aufrufbar mit Book.empty();
  static empty(): Book {
    return new Book('', '', '');
  }

  constructor(public isbn: string,
              public title: string,
              public description: string,
              public rating: number = 1) {}

  rateUp() {
    if (this.rating < 5) {
      this.rating++;
    }
  }

  rateDown() {
    if (this.rating > 1) {
      this.rating--;
    }
  }
}
