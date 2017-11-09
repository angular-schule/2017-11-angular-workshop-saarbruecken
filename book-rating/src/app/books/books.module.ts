import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBookRfComponent } from './create-book-rf/create-book-rf.component';
import { CreateBookTdfComponent } from './create-book-tdf/create-book-tdf.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { BookStoreService } from './shared/book-store.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent,
    CreateBookTdfComponent,
    CreateBookRfComponent,
    BookDetailsComponent
  ],
  providers: [
    BookStoreService
  ]
})
export class BooksModule { }
