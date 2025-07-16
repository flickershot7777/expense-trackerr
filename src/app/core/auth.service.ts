import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = 'user_data';
  private readonly TOKEN_KEY = 'auth_token';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  private currentUserSubject = new BehaviorSubject<User | null>(this.getCurrentUserFromStorage());

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private hasValidToken(): boolean {
    if (this.isBrowser()) {
      const token = localStorage.getItem(this.TOKEN_KEY);
      const userData = localStorage.getItem(this.USER_KEY);
      return !!(token && userData);
    }
    return false;
  }

  private getCurrentUserFromStorage(): User | null {
    if (this.isBrowser()) {
      const userData = localStorage.getItem(this.USER_KEY);
      return userData ? JSON.parse(userData) : null;
    }
    return null;
  }

  // Simple login simulation - replace with real authentication
  login(email: string, password: string): boolean {
    if (this.isBrowser()) {
      // Simulate authentication
      if (email && password) {
        const user: User = {
          id: '1',
          name: email,
          email: email
        };

        const token = 'demo-auth-token-' + Date.now();

        localStorage.setItem(this.TOKEN_KEY, token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));

        this.isAuthenticatedSubject.next(true);
        this.currentUserSubject.next(user);

        return true;
      }
    }
    return false;
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }

    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  // Check authentication status on app initialization
  checkAuthenticationStatus(): void {
    const isAuth = this.hasValidToken();
    const user = this.getCurrentUserFromStorage();

    this.isAuthenticatedSubject.next(isAuth);
    this.currentUserSubject.next(user);
  }
}
