import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectChartPage } from './select-chart.page';

describe('SelectChartPage', () => {
  let component: SelectChartPage;
  let fixture: ComponentFixture<SelectChartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
