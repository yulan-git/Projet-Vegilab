import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-favorites-recipes',
  templateUrl: './favorites-recipes.component.html',
  styleUrls: ['./favorites-recipes.component.scss']
})
export class FavoritesRecipesComponent implements OnInit {
  favoritesList: Recipe[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }

}
