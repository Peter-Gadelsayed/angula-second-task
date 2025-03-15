import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutsComponent } from './produts.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ShowProductsComponent } from './show-products/show-products.component';

const routes: Routes = [
  {
    path: '', component: ProdutsComponent,
    children: [
      { path: 'edite/:id', component: UpdateProductComponent },
      { path: 'show', component: ShowProductsComponent },
      { path: 'delete/:id', component: DeleteProductComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutsRoutingModule { }
