import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product, ProductVariants } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';
  products: any;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductVariants[]> {
    return this.http.get<ProductVariants[]>(this.apiUrl + '/product');
  }


}

