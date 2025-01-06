import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './services/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbModalModule, HttpClientModule, CommonModule, FormsModule, RouterOutlet, RouterModule],
  providers: [ServiceService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  wishlistCount: number = 0;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    // Subscribe to the wishlist observable to get the count
    this.serviceService.getWishlist().subscribe(wishlist => {
      this.wishlistCount = wishlist.length;  // Update the count based on the wishlist items
    });
  }
}