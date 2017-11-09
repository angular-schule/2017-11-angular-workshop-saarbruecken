import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';

declare var window: any;

@Injectable()
export class AuthService {

  private settings = {
    authServer: 'https://angular-schule.eu.auth0.com',
    clientId: 'myb1GOMpODqAaBnS51F9YWhzL13pSyfx',
    redirectUri: 'http://localhost:4200',
    audience: 'https://api.angular.schule'
  };

  constructor(private route: ActivatedRoute) { }

  authorize() {
    const url = `${this.settings.authServer}/authorize?` +
      'response_type=token&' +
      `redirect_uri=${this.settings.redirectUri}&` +
      `client_id=${this.settings.clientId}&` +
      `audience=${this.settings.audience}`;

    window.location = url;
  }

  handleAuthentication() {
    this.route.fragment.pipe(
      map(fragment => new URLSearchParams(fragment).get('access_token')),
      filter(token => !!token)
    )
    .subscribe(token => {
      localStorage.setItem('access_token', token);
      window.location.hash = '';
    });
  }

}
