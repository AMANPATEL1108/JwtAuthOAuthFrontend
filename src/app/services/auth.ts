import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'jwt';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http
      .post<{ token: string }>('/api/auth/login', { username, password })
      .pipe(tap((res) => localStorage.setItem(this.tokenKey, res.token)));
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  get token() {
    return localStorage.getItem(this.tokenKey);
  }

  get role(): string | null {
    const tok = this.token;
    if (!tok) return null;
    const payload = JSON.parse(atob(tok.split('.')[1]));
    const roles: string[] = payload['roles'] || [];
    return roles.includes('ROLE_ADMIN')
      ? 'ADMIN'
      : roles.includes('ROLE_USER')
      ? 'USER'
      : null;
  }

  isAuthenticated(): boolean {
    const tok = this.token;
    if (!tok) return false;

    const payload = JSON.parse(atob(tok.split('.')[1]));
    const exp = payload.exp;
    const now = Math.floor(Date.now() / 1000);

    return exp && exp > now;
  }
}
