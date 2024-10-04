import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectChartPage } from './select-chart.page';

const routes: Routes = [
  {
    path: '',
    component: SelectChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectChartPageRoutingModule {}
