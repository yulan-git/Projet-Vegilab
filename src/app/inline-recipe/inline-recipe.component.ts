import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { AuthService } from '../services/auth.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-inline-recipe',
  templateUrl: './inline-recipe.component.html',
  styleUrls: ['./inline-recipe.component.scss']
})
export class InlineRecipeComponent implements OnInit {
  recipesList: Recipe[];
  currentUserId: number;
  recipes: Recipe[];
  data: Recipe[];
  dataRecipes: Recipe[];
  recipeSub: Subscription;

  constructor(private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUserId = this.authService.getUserId();
    this.recipeSub = this.recipeService.recipeSubject.subscribe(resp => {
      this.recipesList = resp;
    })
    this.recipeService.getRecipesByUserId(this.currentUserId);
  }


  onDeleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id).subscribe(resp => {
      console.log('la recette  a bien été supprimée');
      this.recipeService.getRecipesByUserId(this.currentUserId);
    });
  }

  onUpdateRecipe() {

  }

}
