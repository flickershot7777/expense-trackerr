import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onLogin(): void {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    const loginSuccess = this.authService.login(this.email, this.password);

    if (loginSuccess) {
      // Navigation will be handled by the AuthService
      this.router.navigate(['/main/home']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
