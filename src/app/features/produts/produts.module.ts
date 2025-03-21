import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutsRoutingModule } from './produts-routing.module';
import { ProdutsComponent } from './produts.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutsComponent,
    UpdateProductComponent,
    ShowProductsComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    ProdutsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdutsModule { }
