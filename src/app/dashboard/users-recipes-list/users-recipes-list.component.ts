import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { User } from 'src/app/models/user.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-recipes-list',
  templateUrl: './users-recipes-list.component.html',
  styleUrls: ['./users-recipes-list.component.scss']
})
export class UsersRecipesListComponent implements OnInit {
  recipesList: Recipe[] = [];
  recipeSub: Subscription;
  datePublication: any;

  constructor(private userService: UserService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipesList = [];
    this.recipeSub = this.recipeService.recipesSubject.subscribe(resp => {
      this.recipesList = resp as Recipe[];
    });
    this.recipeService.getAllRecipes();
  }

  userIdToDelete(userId: number) {
    this.userService.deleteUserById(userId).subscribe(resp => {
      console.log('Lutilisateur à bien été supprimé !');
      this.recipeService.getAllRecipes();
    });
  }



}