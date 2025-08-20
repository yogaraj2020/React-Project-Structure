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
      <button (click)="logout()">Logout</button>
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

  logout() {
    this.authService.logout();
  }
}