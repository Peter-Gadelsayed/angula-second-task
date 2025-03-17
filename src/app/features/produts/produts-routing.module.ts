import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutsComponent } from './produts.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {
    path: '', component: ProdutsComponent,
    children: [
      { path: 'edite/:id', component: UpdateProductComponent },
      { path: 'show', component: ShowProductsComponent },
      { path: 'delete/:id', component: DeleteProductComponent },
      { path: 'create', component: CreateProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutsRoutingModule { }
