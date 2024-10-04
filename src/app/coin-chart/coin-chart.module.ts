import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinChartPageRoutingModule } from './coin-chart-routing.module';

import { CoinChartPage } from './coin-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinChartPageRoutingModule
  ],
  declarations: [CoinChartPage]
})
export class CoinChartPageModule {}
