import { Observable } from 'rxjs/Observable';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    buffer,
    debounceTime,
    delay,
    distinctUntilChanged,
    filter,
    map,
    pairwise,
    reduce,
    scan,
    startWith,
    take,
    takeUntil,
    takeWhile,
} from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'br-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.scss']
})
export class RxjsPlaygroundComponent implements OnInit, OnDestroy {

  results: number[] = [];
  resultsPiped: number[] = [];

  subject = new Subject<number>();
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = this.subject.subscribe(e => {
      console.log('Subject:', e);
      this.results.push(e);
    });

    this.subject.pipe(
      startWith(999)
      // map(e => e * 3),
      // distinctUntilChanged(),
      // takeWhile(e => e !== 42),
      // debounceTime(300),
      // takeUntil(Observable.timer(3000))
      // take(5)
      // filter(e => e % 2 === 0)
      // scan((acc, item) => acc + item, 0)
      // pairwise()
      // buffer(Observable.interval(2000))
      // delay(1000)
    )
    .subscribe(e => {
      console.log('Subject Piped:', e);
      this.resultsPiped.push(e);
    },
    () => {},
    () => { console.log('COMPLETED'); });

  }

  sendRandomValue() {
    const random = Math.floor(Math.random() * 100);
    this.subject.next(random);
  }

  sendValue(value: number) {
    this.subject.next(value);
  }

  completeSubject() {
    this.subject.complete();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
