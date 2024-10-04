import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectChartPageRoutingModule } from './select-chart-routing.module';

import { SelectChartPage } from './select-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectChartPageRoutingModule
  ],
  declarations: [SelectChartPage]
})
export class SelectChartPageModule {}
