import { NgModule } from '@angular/core';
import { InvestmentCalculateComponent } from './investment-calculate.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InvestmentCalculateComponent],
  exports: [InvestmentCalculateComponent],
  imports: [FormsModule],
})
export class InvestmentCalculateModule {}
