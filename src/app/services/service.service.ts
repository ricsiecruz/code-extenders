import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = 'assets/products.json';

  constructor(private http: HttpClient) {}

  getProductList(): Observable<any> {
    console.log('Fetching products from', this.apiUrl);
    return this.http.get<any>(this.apiUrl);
  }

  getProductDetails(id: number): Observable<any> {
    return this.getProductList().pipe(
      map(products => products.find((product: { id: number; }) => product.id === id))
    );
  }
  
}
