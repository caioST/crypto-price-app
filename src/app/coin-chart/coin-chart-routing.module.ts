import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinChartPage } from './coin-chart.page';

const routes: Routes = [
  {
    path: '',
    component: CoinChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinChartPageRoutingModule {}
