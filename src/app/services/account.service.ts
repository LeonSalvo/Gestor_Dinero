import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  monthly_income: number = 0;
  monthly_expenses: number = 0;
  global_expenses: number = 0;
  daily_money: number = 0;
  saving: number = 0;
  balance: number = 0;
  months: any;
  constructor() { 
    this.months = {
      1: 31,
      2: 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
      //año bisiesto
      13: 29
    };
  }

  setMonthlyIncome(income: number) {
    this.monthly_income = income;
  }

  setMonthlyExpenses(expenses: number) {
    this.monthly_expenses += expenses;
  }

  setGlobalExpenses(expenses: number) {
    this.global_expenses += expenses;
  }

  setSaving(saving: number) {
    this.saving += saving;
  }

  setBalance() {
    this.balance = this.monthly_income - this.monthly_expenses - this.global_expenses;
  }

  updateBalance(expense: number) {
    this.balance = this.balance - expense;
  }

  isLeapYear(): boolean {
    let year = new Date().getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  setDailyMoney() {
    let month = this.months[new Date().getMonth() + 1];
    if (this.isLeapYear() && month === 2) {
      month = this.months[13];
    } 
    console.log(month);
    console.log(this.months[month]);
    this.daily_money = this.balance / this.months[month];
  }


}
