import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  titleSearchContent = "Rechercher une recette";
  yellowBackgroung: boolean=true;
  recipes: Recipe[]; 
  private recSub: Subscription;

constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recSub = this.recipeService.getAllRecipes().subscribe(resp => {
      
      this.recipes = resp;
      console.log(this.recipes);
    })
    console.log(this.recipes);
    
  }
  // ngOnDestroy() {
  //   this.recSub.unsubscribe();
  // }
}
