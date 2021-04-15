import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  isLoggedIn(): boolean {
    let user = localStorage.getItem('user');
    let isLoggedUser: boolean;

    user !== null ? (isLoggedUser = true) : (isLoggedUser = false);

    return isLoggedUser;
  }
}
