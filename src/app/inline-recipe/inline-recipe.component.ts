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
  private recipeSub: Subscription;

  constructor(private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUserId = this.authService.getUserId();
    this.recipeSub = this.recipeService.getRecipesByUserId(this.currentUserId).subscribe(resp => {
      this.recipesList = resp
    });
  }

}
