import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewExpenseComponent } from './components/view-expense/view-expense.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home Page' },

  
  { path: 'signup', component: SignupComponent, title: 'Sign Up Page' },
  { path: 'view-expense', component: ViewExpenseComponent, title: 'View Expense Page' },
  { path: 'add-expense', component: AddExpenseComponent, title: 'Add Expense Page' },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
