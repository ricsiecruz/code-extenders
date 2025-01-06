import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  wishlist: any[] = [];

  constructor(private wishlistService: ServiceService) {}

  ngOnInit(): void {
    // Subscribe to the wishlist observable to get the updated list
    this.wishlistService.getWishlist().subscribe(wishlist => {
      console.log('Wishlist updated:', wishlist); // Check if data is correct
      this.wishlist = wishlist;
    });
  }
}
