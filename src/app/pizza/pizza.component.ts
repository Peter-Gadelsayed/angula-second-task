import { Component } from '@angular/core';
import { AppService } from '../shared/services/app.service';
import { Router } from '@angular/router';
import { Pizza, Recipes } from '../models/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {
  constructor(private apiService: AppService, private router: Router) { }
  data!: Pizza;
  recipes: Recipes[] = [];

  ngOnInit(): void {
    this.apiService.getData('pizza').subscribe(
      (data) => {
        this.recipes = data.recipes;
        console.log(this.recipes);
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    )
  }

  handleEvent(recipe: Recipes) {
    this.router.navigate(['/recipe/', recipe.recipe_id]);
    console.log(recipe.recipe_id);
  }
}
