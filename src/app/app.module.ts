import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InvestmentResultComponent } from './components/investment-result/investment-result.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { InvestmentCalculateModule } from './components/investment-calculate/investment-calculate.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, InvestmentCalculateModule],
})
export class AppModule {}
