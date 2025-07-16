import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  userData: any = null;

  initGoogleSignIn(clientId: string, callbackFn: (res: any) => void) {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: clientId,
      callback: callbackFn,
    });

    // @ts-ignore
    google.accounts.id.renderButton(
      document.getElementById('googleBtn'),
      { theme: 'outline', size: 'large', type: 'standard' }
    );
  }

  decodeJwt(token: string): any {
    const payload = token.split('.')[1];
    const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decodeURIComponent(
      decoded.split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join('')
    ));}
}
