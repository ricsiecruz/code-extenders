import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'wishlist', component: WishlistComponent }
];
  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }