import { CalculateInvestmentService } from './../../calculate-investment.service';
import { Component, inject, Input } from '@angular/core';
import { InvestmentResult } from '../../model/investment-result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  // @Input() data?: InvestmentResult[];
  private calculateInvestment = inject(CalculateInvestmentService);

  get data() {
    return this.calculateInvestment.resultData;
  }
}
