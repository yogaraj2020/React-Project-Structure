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

  getAccount() {
    return this.msalInstance.getAccount();
  }

  isAuthenticated(): boolean {
    return this.getAccount() != null;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.login();  // redirect to Azure AD login
      return false;
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="!user">
      <button (click)="login()">Login</button>
    </div>
    <div *ngIf="user">
      <h3>Welcome, {{ user.name }}</h3>
    </div>
  `
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getAccount();
  }

  login() {
    this.authService.login();
  }
}
