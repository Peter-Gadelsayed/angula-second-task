import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/pizza';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.scss']
})
export class RecipedetailsComponent implements OnInit {

  recipeId: any = '';
  recipeDetail!: Recipe;

  constructor(private apiService: AppService, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id')
    this.recipeDetails(this.recipeId)
  }

  recipeDetails(id: string) {
    this.apiService.getRecipeDetails(id).subscribe((response) => {
      this.recipeDetail = response
      console.log(response);
    },
      (error) => {
        console.error('Error fetching posts:', error);
      })
  }
}
