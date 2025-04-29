import { InvestmentResult } from './model/investment-result.model';
import { InvestmentData } from './model/investment-data.model';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculateInvestmentService {
  private result = signal<InvestmentResult[]>([]);

  calculate(data: InvestmentData) {
    let totalInterest = 0;
    let invested = data.initial;
    let investment = data.initial;
    for (let year = 1; year <= data.duration; year++) {
      const interest = (investment * data.return) / 100;
      invested += data.annual;
      totalInterest += interest;
      investment = invested + totalInterest;
      const yearResult: InvestmentResult = {
        year: year,
        investment: investment,
        interest: interest,
        totalInterest: totalInterest,
        investedCapital: invested,
      };
      this.result.update((currentValue) => [...currentValue, yearResult]);
    }
  }

  get resultData() {
    return this.result();
  }
}
