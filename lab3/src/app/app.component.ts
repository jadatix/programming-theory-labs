import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  constructor() {
    this.Logout()
  }
  Logout() {
    window.localStorage.setItem('isLoginned', "false")
  }
}
