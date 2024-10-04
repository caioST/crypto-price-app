import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-coin',
  templateUrl: './select-coin.page.html',
  styleUrls: ['./select-coin.page.scss'],
})
export class SelectCoinPage {
  coins = [
    { id: 'bitcoin', name: 'Bitcoin', description: 'A principal criptomoeda.' },
    { id: 'ethereum', name: 'Ethereum', description: 'Plataforma para contratos inteligentes.' },
    { id: 'litecoin', name: 'Litecoin', description: 'Uma versão leve do Bitcoin.' },
  ];

  constructor(private router: Router) {}

  selectCoin(coinId: string) {
    this.router.navigate(['/coin-chart', { id: coinId }]);
  }
}
