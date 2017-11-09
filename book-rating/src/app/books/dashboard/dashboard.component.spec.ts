import { Book } from './../shared/book';
import { BookComponent } from './../book/book.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a BookComponent for each book', () => {
    component.books = [
      new Book('', '', ''),
      new Book('', '', ''),
      new Book('', '', '')
    ];

    fixture.detectChanges();
    const comps = fixture.debugElement.queryAll(By.css('br-book'));

    expect(comps.length).toBe(component.books.length);
  });
});
