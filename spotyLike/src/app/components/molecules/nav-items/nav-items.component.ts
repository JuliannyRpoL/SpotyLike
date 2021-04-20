import { Component } from '@angular/core';

@Component({
  selector: 'm-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
})
export class NavItemsComponent {
  constructor() {}

  handleLogout() {
    localStorage.removeItem('user-access');
    window.location.href = '/login';
  }
}
