import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InvestmentCalculateComponent } from './components/investment-calculate/investment-calculate.component';
import { InvestmentData } from './model/investment-data.model';
import { CalculateInvestmentService } from './services/calculate-investment.service';
import { InvestmentResult } from './model/investment-result.model';
import { InvestmentResultComponent } from './components/investment-result/investment-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    InvestmentCalculateComponent,
    InvestmentResultComponent,
  ],
})
export class AppComponent {
  private calculateService = inject(CalculateInvestmentService);
  resultData?: InvestmentResult[] = [];

  onCalculate(data: InvestmentData) {
    this.resultData = this.calculateService.calculate(data);
  }
}
