import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../models/category.model';
import { Cost } from '../models/cost.model';
import { Difficulty } from '../models/difficulty.model';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { Unity } from '../models/unity.model';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { RecipeService } from '../services/recipe.service';
import { SelectService } from '../services/select.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit, OnDestroy, OnChanges {
  recipeForm: FormGroup;
  recSub: Subscription;
  currentUser: any;
  currentUserId: number;
  recipeList: Recipe[];

  times = [
    '- de 20min', 'entre 20-40min', 'entre 40-60min', '+ de 60min'
  ]
  costs: Cost[];
  categories: Category[];
  difficulties: Difficulty[];
  unities: Unity[];
  ingredients: Ingredient[];
  recipe: Recipe;
  newRecipe: Recipe;

  constructor(private selectService: SelectService, private recipeService: RecipeService, private router: Router, private authService: AuthService, private userService: UserService) {
    this.recipeForm = new FormGroup({});
  }

  ngOnInit(): void {
    // this.getCategoriesList();
    // this.getDifficultiesList();
    this.getCostsList();
    // this.getUnitiesList();
    // this.getIngredientsList();
    this.initForm();
    this.getUser();
    // this.recipeService.getAllRecipes().subscribe((recipes: Array<Recipe>) => {
    //   this.recipeList = recipes;
    // })
  }

  ngOnChanges() {
    
  }

  getUser() {
    this.currentUserId = this.authService.getUserId();
    console.log(this.currentUserId);
    this.recSub = this.userService.getUserById(this.currentUserId).subscribe(resp => {
      this.currentUser = resp;
    }
    )
  }

  initForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl('Buddha bowl'),
      description: new FormControl("Un buddha bowl délicieux et complet pour réveiller vos sens, rafraîchir votre corps et faire de l'été la meilleure des saisons!"),
      preparationTime: new FormControl(15),
      cookingTime: new FormControl(15),
      //difficulties: new FormControl('Facile'),
      //categories: new FormControl([]),
      costs: new FormControl('Bon marché'),
      //personNbr: new FormControl(2),
      //addIngredient: new FormControl('tomates(s)'),
      //unities: new FormControl(''),
      //quantity: new FormControl(2),
      //addStep: new FormControl("Laver les tomates"),
    });
    console.log(this.recipeForm);

  }

  onSubmit() {
    console.log("iciiiii");
    
      const formValues = this.recipeForm.value;
      console.log(formValues);
      this.newRecipe = {
        name: this.recipeForm.value.name,
        description: this.recipeForm.value.description,
        preparationTime: this.recipeForm.value.preparationTime,
        cookingTime: this.recipeForm.value.cookingTime,
        //personNbr: this.recipeForm.value.personNbr,
        //steps: this.recipeForm.value.addStep
      }
      this.recSub = this.recipeService.createRecipe(this.currentUserId, this.newRecipe).subscribe((resp: any)=> {
            console.log('Recette créée et ajoutée à liste de l\'utilisateur');          
          })
          this.router.navigate(['welcome-home']);
    }

  
    // getDifficultiesList() {
    //   this.recSub = this.selectService.getAllDifficulties().subscribe(resp => {
    //     console.log(resp);
    //     this.difficulties = resp;
    //   })
    // }
  
  getCostsList() {
    this.recSub = this.selectService.getAllCosts().subscribe(resp => {
      console.log(resp);
      this.costs = resp;
    })
  }
  // getCategoriesList() {
  //   this.recSub = this.selectService.getAllCategories().subscribe(resp => {
  //     console.log(resp);
  //     this.categories = resp;
  //   })
  // }
  // getUnitiesList() {
  //   this.recSub = this.selectService.getAllUnities().subscribe(resp => {
  //     console.log(resp);
  //     this.unities = resp;
  //   })
  // }
  // getIngredientsList() {
  //   this.recSub = this.selectService.getAllIngredients().subscribe(resp => {
  //     console.log(resp);
  //     this.ingredients = resp;
  //   })
  // }
  
  ngOnDestroy() {
    this.recSub.unsubscribe();
}
}
