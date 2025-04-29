import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { CalculateInvestmentService } from '../../services/calculate-investment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investment-calculate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-calculate.component.html',
  styleUrl: './investment-calculate.component.css',
})
export class InvestmentCalculateComponent {
  @Output() calculate = new EventEmitter();
  private calculateService = inject(CalculateInvestmentService);

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

    this.calculate.emit(data);
  }
}
