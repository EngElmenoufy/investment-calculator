import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculateInvestmentService } from '../../calculate-investment.service';

@Component({
  selector: 'app-investment-calculate',
  templateUrl: './investment-calculate.component.html',
  styleUrl: './investment-calculate.component.css',
})
export class InvestmentCalculateComponent {
  // @Output() calculate = new EventEmitter();
  constructor(private calculateInvestment: CalculateInvestmentService) {}

  initial = signal('');
  annual = signal('');
  return = signal('');
  duration = signal('');

  onCalculate() {
    const data = {
      initial: Number(this.initial()),
      annual: Number(this.annual()),
      return: Number(this.return()),
      duration: Number(this.duration()),
    };

    this.calculateInvestment.calculate(data);

    // this.calculate.emit(data);
  }
}
