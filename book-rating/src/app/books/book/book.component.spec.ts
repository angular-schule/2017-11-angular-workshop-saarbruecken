import { LOCALE_ID } from '@angular/core';
import { Book } from './../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers: [
        { provide: LOCALE_ID, useValue: 'de' }
      ]
    })
    .compileComponents();

    registerLocaleData(localeDe)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = new Book('', 'title', 'description');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call rateUp() when clicking thumbs up', () => {
    const rateUpBtn = fixture.debugElement.query(By.css('button.rate-up-btn'));

    spyOn(component, 'rateUp');
    rateUpBtn.nativeElement.click();

    expect(component.rateUp).toHaveBeenCalled();
  });

  it('should display the book title and rating', () => {
    const title = fixture.debugElement.query(By.css('h2 span.book-title')).nativeElement;
    const rating = fixture.debugElement.query(By.css('h2 span.rating-badge')).nativeElement;

    component.book.title = 'Mein Titel';
    component.book.rating = 3;

    fixture.detectChanges();

    expect(title.textContent).toBe('Mein Titel');
    expect(rating.textContent).toBe('3');
  });
});
