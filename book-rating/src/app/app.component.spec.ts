import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import localeDe from '@angular/common/locales/de';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: LOCALE_ID, useValue: 'de' }
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();

    registerLocaleData(localeDe);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Willkommen');
  }));

  it('should show the date', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    const dateBox = fixture.debugElement.query(By.css('.date-box')).nativeElement;

    // mit echter DatePipe
    fixture.detectChanges();
    expect(dateBox.textContent)
      .toBe(new DatePipe('de').transform(new Date(), 'fullDate'));

    // mit fest definiertem Datum
    component.d = new Date('2017-03-22 12:00:00');
    fixture.detectChanges();
    expect(dateBox.textContent).toBe('Mittwoch, 22. März 2017');
  });
});
