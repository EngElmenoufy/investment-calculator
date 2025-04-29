import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCalculateComponent } from './investment-calculate.component';

describe('InvestmentCalculateComponent', () => {
  let component: InvestmentCalculateComponent;
  let fixture: ComponentFixture<InvestmentCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentCalculateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
