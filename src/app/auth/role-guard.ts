import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const expectedRole = route.data['role'] as 'USER' | 'ADMIN';
    const userRole = this.auth.role;

    if (this.auth.isAuthenticated() && userRole === expectedRole) {
      return true;
    }

    return this.router.parseUrl('/access-denied');
  }
}
