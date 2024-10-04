import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCoinPageRoutingModule } from './select-coin-routing.module';

import { SelectCoinPage } from './select-coin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectCoinPageRoutingModule
  ],
  declarations: [SelectCoinPage]
})
export class SelectCoinPageModule {}
