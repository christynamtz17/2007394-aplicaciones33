import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {
  private apiUrl = 'https://fakestoreapi.com/';

  constructor() { }

  getAllProducts() {
    return axios.get(`${this.apiUrl}products`);
  }

  getProduct(id: number) {
    return axios.get(`${this.apiUrl}products/${id}`);
  }
}
