import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
})
export class NavItemsComponent implements OnInit {
  activeRoute: string = '';

  constructor() {}

  getRoute() {
    return window.location.pathname;
  }

  ngOnInit() {
    this.activeRoute = this.getRoute();
  }

  handleLogout() {
    localStorage.removeItem('user-access');
    window.location.href = '/login';
  }
}
