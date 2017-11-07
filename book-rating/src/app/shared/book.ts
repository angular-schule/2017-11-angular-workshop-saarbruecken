export class Book {
  constructor(public isbn: string,
              public title: string,
              public description: string,
              public rating: number = 1) {}

  rateUp() {
    this.rating++;
  }

  rateDown() {
    this.rating--;
  }
}