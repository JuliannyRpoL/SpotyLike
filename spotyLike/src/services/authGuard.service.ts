import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { isLoggedIn } from '../utils/userLogged';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
