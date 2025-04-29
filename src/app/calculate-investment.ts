import { InvestmentResult } from './model/investment-result.model';
import { InvestmentData } from './model/investment-data.model';

export function CalculateInvestment(data: InvestmentData) {
  let result: InvestmentResult[] = [];

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
    result.push(yearResult);
  }

  return result;
}
