import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoinChartPage } from './coin-chart.page';

describe('CoinChartPage', () => {
  let component: CoinChartPage;
  let fixture: ComponentFixture<CoinChartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
