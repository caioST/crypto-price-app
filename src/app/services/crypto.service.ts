import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.coingecko.com/api/v3/simple/price';

  constructor(private http: HttpClient) {}

  getCryptoPrices(ids: string, vs_currency: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?ids=${ids}&vs_currencies=${vs_currency}`);
  }
}
