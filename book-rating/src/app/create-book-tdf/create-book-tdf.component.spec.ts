import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookTdfComponent } from './create-book-tdf.component';

describe('CreateBookTdfComponent', () => {
  let component: CreateBookTdfComponent;
  let fixture: ComponentFixture<CreateBookTdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookTdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
