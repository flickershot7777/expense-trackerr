import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ExpenseService, Expense } from '../../services/expense.service';
import { Subscription } from 'rxjs';
import { RouterModule  } from '@angular/router';

@Component({
  selector: 'app-view-expense',
  standalone: true,
  imports: [DatePipe, CommonModule, RouterModule],
  templateUrl: './view-expense.component.html',
  styleUrl: './view-expense.component.css'
})
export class ViewExpenseComponent implements OnInit, OnDestroy {
  expenses: Expense[] = [];
  totalAmount: number = 0;
  private expensesSubscription: Subscription = new Subscription();

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.expensesSubscription = this.expenseService.getExpenses().subscribe(expenses => {
      this.expenses = expenses;
      this.totalAmount = this.expenseService.getTotalAmount();
    });
  }

  ngOnDestroy() {
    if (this.expensesSubscription) {
      this.expensesSubscription.unsubscribe();
    }
  }

  deleteExpense(id: string) {
    if (confirm('Are you sure you want to delete this expense?')) {
      this.expenseService.deleteExpense(id);
    }
  }
}
