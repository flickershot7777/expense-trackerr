import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth.service';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Expense-tracker';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Check authentication status on app initialization
    this.authService.checkAuthenticationStatus();
  }
}
