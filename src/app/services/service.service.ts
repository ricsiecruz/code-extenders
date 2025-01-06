import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = 'assets/products.json';
  private wishlist: any[] = [];
  private wishlistSubject: BehaviorSubject<any[]> = new BehaviorSubject(this.wishlist);

  constructor(private http: HttpClient) {}

  getProductList(): Observable<any> {
    console.log('Fetching products from', this.apiUrl);
    return this.http.get<any>(this.apiUrl);
  }

  getProductDetails(id: number): Observable<any> {
    return this.getProductList().pipe(
      map(products => {
        const product = products.find((product: { id: number; }) => product.id === id);
        console.log('Fetched product details:', product); // Log the fetched product
        return product;
      })
    );
  }  

  addToWishlist(product: any) {
    console.log('Adding to wishlist:', product); // Log to verify product
    if (!this.isInWishlist(product)) {
      this.wishlist.push(product);
      this.wishlistSubject.next(this.wishlist);
    } else {
      console.log('Already in wishlist:', product);
    }
  }  
  
  getWishlist() {
    return this.wishlistSubject.asObservable();
  }
  

  // Remove product from wishlist
  removeFromWishlist(product: any) {
    this.wishlist = this.wishlist.filter(item => item !== product);
    this.wishlistSubject.next(this.wishlist);
  }

  // Check if product is in wishlist
  isInWishlist(product: any): boolean {
    return this.wishlist.some(item => item.title === product.title);
  }

}
