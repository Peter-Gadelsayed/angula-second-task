import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Pizza, Recipes } from '../models/pizza';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.scss']
})
export class PastaComponent {
  constructor(private apiService: AppService, private router: Router) { }
  data!: Pizza;
  recipes: Recipes[] = [];

  ngOnInit(): void {
    this.apiService.getPastaData().subscribe(
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
