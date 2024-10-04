import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'coin-chart',
    loadChildren: () => import('./coin-chart/coin-chart.module').then( m => m.CoinChartPageModule)
  },
  {
    path: 'select-chart',
    loadChildren: () => import('./select-chart/select-chart.module').then( m => m.SelectChartPageModule)
  },
  {
    path: 'select-coin',
    loadChildren: () => import('./select-coin/select-coin.module').then( m => m.SelectCoinPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
