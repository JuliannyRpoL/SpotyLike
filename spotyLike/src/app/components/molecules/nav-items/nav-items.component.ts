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
    sessionStorage.removeItem('user_access');
    sessionStorage.removeItem('user_data');
    window.location.href = '/login';
  }
}
