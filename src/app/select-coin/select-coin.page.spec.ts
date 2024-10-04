import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectCoinPage } from './select-coin.page';

describe('SelectCoinPage', () => {
  let component: SelectCoinPage;
  let fixture: ComponentFixture<SelectCoinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
