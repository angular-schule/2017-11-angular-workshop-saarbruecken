import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookRfComponent } from './create-book-rf.component';

describe('CreateBookRfComponent', () => {
  let component: CreateBookRfComponent;
  let fixture: ComponentFixture<CreateBookRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
