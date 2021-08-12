import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss']
})
export class RecapitulatifComponent implements OnInit {
  currentUserId;
  recipe: Recipe;
  recipes: Recipe[];
  recSub: Subscription
  recipeId:number
  constructor(private userService: UserService, private authService: AuthService, private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
