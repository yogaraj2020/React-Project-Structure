import { Injectable } from '@angular/core';
import * as Msal from 'msal';

@Injectable()
export class AuthService {
  private msalInstance: Msal.UserAgentApplication;

  constructor() {
    this.msalInstance = new Msal.UserAgentApplication({
      auth: {
        clientId: '<YOUR-CLIENT-ID>',   // Azure AD App Registration
        authority: 'https://login.microsoftonline.com/<TENANT-ID>',
        redirectUri: 'http://localhost:4200',
        navigateToLoginRequestUrl: false
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true
      }
    });

    // Handle redirect response
    this.msalInstance.handleRedirectCallback((error, response) => {
      if (error) {
        console.error('Redirect error:', error);
      } else if (response) {
        console.log('Redirect success:', response);
      }
    });
  }

  login() {
    this.msalInstance.loginRedirect({
      scopes: ['openid', 'profile']
    });
  }

  logout() {
    this.msalInstance.logout();
  }

  getAccount() {
    return this.msalInstance.getAccount();
  }

  isAuthenticated(): boolean {
    return this.getAccount() != null;
  }
}