import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { find } from 'rxjs/operators';
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
  data: Recipe[];
  dataRecipes: Recipe[];
  id: number;
  private recSub: Subscription;
  seePopup: boolean = false;

constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.onGetRecipes();
  }
  
  onGetRecipes() {
    this.recSub = this.recipeService.getAllRecipes().subscribe(resp => {
      this.recipes = resp;
      console.log(this.recipes)
    })
  }

  ngOnDestroy() {
    this.recSub.unsubscribe();
  }
}
