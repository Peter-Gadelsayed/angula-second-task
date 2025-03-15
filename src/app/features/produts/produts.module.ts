import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutsRoutingModule } from './produts-routing.module';
import { ProdutsComponent } from './produts.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ShowProductsComponent } from './show-products/show-products.component';


@NgModule({
  declarations: [
    ProdutsComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ShowProductsComponent
  ],
  imports: [
    CommonModule,
    ProdutsRoutingModule
  ]
})
export class ProdutsModule { }
