import { AuthService } from './shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'br';
  url = 'https://angular.schule';
  d = new Date();

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.handleAuthentication();
  }

  login() {
    this.auth.authorize();
  }
}
