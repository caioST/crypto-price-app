import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoService } from '../services/crypto.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-coin-chart',
  templateUrl: './coin-chart.page.html',
  styleUrls: ['./coin-chart.page.scss'],
})
export class CoinChartPage implements OnInit {
  coinId!: string; // Adicione "!" para indicar que será inicializado antes do uso
  coinName: string = '';
  prices: any = {};
  coinChart: any;

  constructor(private route: ActivatedRoute, private cryptoService: CryptoService) {
    Chart.register(...registerables); // Registra todas as partes do Chart.js
  }

  ngOnInit() {
    this.coinId = this.route.snapshot.paramMap.get('id') || ''; // Inicializa com string vazia caso não encontre 'id'
    this.coinName = this.coinId.charAt(0).toUpperCase() + this.coinId.slice(1); // Capitaliza a primeira letra
    this.loadPrices();
  }

  loadPrices() {
    this.cryptoService.getCryptoPrices(this.coinId, 'usd').subscribe(
      data => {
        this.prices = data;
        this.loadChart();
      },
      error => {
        console.error('Erro ao buscar preços da criptomoeda', error);
      }
    );
  }

  loadChart() {
    const labels = ['Preço Atual']; // Você pode adicionar mais rótulos conforme necessário
    const dataValues = [this.prices[this.coinId]?.usd]; // Obtém o preço da moeda

    this.coinChart = new Chart('coinChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: `${this.coinName} Price`,
          data: dataValues,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
