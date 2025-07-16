
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { ViewExpenseComponent } from './../view-expense/view-expense.component';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expense = {
    description: '',
    amount: 0,
    category: '',
    productType: '',
    date: ''
  };

  ViewExpense = '/view-expense';
  redirectToViewExpense() {
    return this.ViewExpense;
  }

  constructor(private expenseService: ExpenseService) {}

  onSubmit() {
    if (this.validateForm()) {
      this.expenseService.addExpense(this.expense);
      this.resetForm();
      alert('Expense added successfully!');
    }
  }

  private validateForm(): boolean {
    if (!this.expense.description.trim()) {
      alert('Please enter a description');
      return false;
    }
    if (this.expense.amount <= 0) {
      alert('Please enter a valid amount');
      return false;
    }
    if (!this.expense.category) {
      alert('Please select a category');
      return false;
    }
    if (!this.expense.productType.trim()) {
      alert('Please enter a product type');
      return false;
    }
    if (!this.expense.date) {
      alert('Please select a date');
      return false;
    }
    return true;
  }

  private resetForm() {
    this.expense = {
      description: '',
      amount: 0,
      category: '',
      productType: '',
      date: ''
    };
  }
}
