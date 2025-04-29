import { Component, Input } from '@angular/core';
import { InvestmentResult } from '../../model/investment-result.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  @Input() data?: InvestmentResult[];
}
