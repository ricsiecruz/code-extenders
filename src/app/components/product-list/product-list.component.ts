import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  list: any;

  constructor(
    private service: ServiceService,
    private router: Router
  ) {
    this.service.getProductList().subscribe((res: any) => {
      console.log('res', res);
      this.list = res;
    });
  }

  navigateToProduct(title: string): void {
    this.router.navigate(['/product', title]);
  }
}
