import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: ProductListComponent }
];
  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }