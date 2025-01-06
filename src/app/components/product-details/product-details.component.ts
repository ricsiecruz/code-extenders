import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  isInWishlist: boolean = false;
  productDetails$!: Observable<any>; // Observable for product details

  constructor(private route: ActivatedRoute, private productService: ServiceService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productDetails$ = this.productService.getProductDetails(+id);
        this.productDetails$.subscribe(product => {
          if (product) {
            console.log('Fetched product:', product); // Verify product data
            this.isInWishlist = this.productService.isInWishlist(product);
          } else {
            console.log('Product not found for id:', id);
          }
        });
      }
    });
  }

  toggleWishlist(product: any) {
    if (product) {
      if (this.isInWishlist) {
        this.productService.removeFromWishlist(product);
      } else {
        this.productService.addToWishlist(product);
      }

      // Update the button text
      this.isInWishlist = !this.isInWishlist;
    } else {
      console.log('No product to add to wishlist');
    }
  }

}
