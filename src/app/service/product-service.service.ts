import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiUrl: string;
  private apiUrl2: string;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = 'https://dummyjson.com/products'
  }
  getAllProducts() {
    return this.httpClient.get(this.apiUrl);
  }
}
