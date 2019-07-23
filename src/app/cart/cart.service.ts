import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private heroes = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(hero) {
    this.heroes.push(hero);
  }

  getHeroes() {
    return this.heroes;
  }

  clearCart() {
    this.heroes = [];
    return this.heroes;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
