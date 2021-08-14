import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { Cost } from '../models/cost.model';
import { Difficulty } from '../models/difficulty.model';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { AuthService } from '../services/auth.service';
import { RecipeService } from '../services/recipe.service';
import { SelectService } from '../services/select.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  categories: Category[];
  costs: Cost[];
  currentUsername: string;
  currentUserId: number;
  currentDate: string;

  difficulties: Difficulty[];

  haveStep: boolean = false;

  id: number;
  isCreateMode: boolean;
  isAdded: boolean = false;
  ingredients: Ingredient[];
  ingredientList: {};
  ingrMap: Map<string, number>;

  newRecipe: any;
  nbPerson: number;

  recipeForm: FormGroup;
  recipeList: Recipe[];
  recipeToModify: any;
  recSub: Subscription;

  steps: string[];
  stepsData: string[];

  user: {};
  userMap: Map<string, number>;

  times = [
    '- de 20min', 'entre 20-40min', 'entre 40-60min', '+ de 60min'
  ]

  constructor(
    private selectService: SelectService,
    private recipeService: RecipeService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.recipeForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isCreateMode = !this.id;

    this.steps = [];
    this.ingredientList = {};
    this.user = {};
    this.ingrMap = new Map();
    this.userMap = new Map();

    const date = new Date();
    this.currentDate = formatDate(date, 'yyyy-MM-dd', 'fr-FR');

    this.getCategoriesList();
    this.getDifficultiesList();
    this.getCostsList();
    this.getIngredientsList();
    this.initForm();
    this.getUser();
  }

  initForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      preparationTime: new FormControl(null),
      cookingTime: new FormControl(null),
      difficulties: new FormControl(null),
      ingredientsList: new FormControl({}),
      categories: new FormControl([]),
      costs: new FormControl(null),
      nbPerson: new FormControl(null),
      steps: new FormControl([])
    });

    if (!this.isCreateMode) {
      this.recipeService.getRecipe(this.id).subscribe(recipe => this.recipeForm.patchValue(recipe)
      );
      
    }
  }

  getUser() {
    this.currentUserId = this.authService.getUserId();
    this.currentUsername = this.authService.getUserUsername();
    this.userMap.set(this.currentUsername, this.currentUserId);
  }

  addIngredientToList(ingredient: string, amount: number, nbPerson: number) {
    this.isAdded = true;
    this.nbPerson = nbPerson;
    this.ingrMap.set(ingredient, amount);
  }

  deleteIngredientFromRecipe(item) {
    this.ingrMap.delete(item);
  }

  addStepToRecipe(step: string) {
    this.haveStep = true;
    this.steps.push(step);
  }

  deleteStepFromRecipe(stepIndex: string) {
    for (let i = 0; i < this.steps.length; i++) {
      if (this.steps[i] === stepIndex) {
        this.stepsData = this.steps.splice(i, 1);
        this.stepsData = this.steps;
      }
    }
  }

  mapToObject(map: Map<string, number>, list: {}) {
    map.forEach((val, key) => {
      list[key] = val;
    })
  }

  onSubmit() {
    this.mapToObject(this.ingrMap, this.ingredientList);
    this.mapToObject(this.userMap, this.user);

    this.newRecipe = {
      name: this.recipeForm.value.name,
      description: this.recipeForm.value.description,
      preparationTime: this.recipeForm.value.preparationTime,
      cookingTime: this.recipeForm.value.cookingTime,
      nbPerson: this.recipeForm.value.nbPerson,
      cost: this.recipeForm.value.costs,
      categories: this.recipeForm.value.categories,
      difficulty: this.recipeForm.value.difficulties,
      ingredientsList: this.ingredientList,
      datePublication: this.currentDate,
      steps: this.steps,
      user: this.user
    }
    this.recipeToModify = {
      id: this.id,
      name: this.recipeForm.value.name,
      description: this.recipeForm.value.description,
      preparationTime: this.recipeForm.value.preparationTime,
      cookingTime: this.recipeForm.value.cookingTime,
      nbPerson: this.recipeForm.value.nbPerson,
      cost: this.recipeForm.value.costs,
      categories: this.recipeForm.value.categories,
      difficulty: this.recipeForm.value.difficulties,
      ingredientsList: this.ingredientList,
      datePublication: this.currentDate,
      steps: this.steps,
      user: this.user
    }

    if (this.isCreateMode) {
      this.createRecipe();
    } else {
      this.updateRecipe();
    }


  }
  
  private createRecipe() {
    this.recipeService.createRecipe(this.newRecipe).subscribe((resp: any) => {
      console.log('Recette créée et ajoutée à liste de l\'utilisateur');
    })
    this.router.navigate(['welcome-home']);
  }

  private updateRecipe() {
    this.recipeService.updateRecipe(this.recipeToModify).subscribe((resp: any) => {
      console.log('Recette modifiée');
    })
    this.router.navigate(['welcome-home']);
  }
  
  getDifficultiesList() {
    this.selectService.getAllDifficulties().subscribe(resp => {
      console.log(resp);
      this.difficulties = resp;
    })
  }

  getCostsList() {
    this.selectService.getAllCosts().subscribe(resp => {
      console.log(resp);
      this.costs = resp;
    })
  }
  getCategoriesList() {
    this.selectService.getAllCategories().subscribe(resp => {
      console.log(resp);
      this.categories = resp;
    })
  }

  getIngredientsList() {
    this.selectService.getAllIngredients().subscribe(resp => {
      console.log(resp);
      this.ingredients = resp;
    })
  }
}
