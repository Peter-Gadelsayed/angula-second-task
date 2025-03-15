import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import { PastaComponent } from './pasta/pasta.component';
import { PizzaComponent } from './pizza/pizza.component';
import { recipeGuard } from './guards/recipe.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'pizza', component: PizzaComponent
  },
  {
    path: 'pasta', component: PastaComponent
  },
  {
    path: 'recipe/:id', component: RecipedetailsComponent,
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
