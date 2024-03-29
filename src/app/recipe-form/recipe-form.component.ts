import { formatDate } from '@angular/common';
import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../models/category.model';
import { Cost } from '../models/cost.model';
import { Difficulty } from '../models/difficulty.model';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { Upload } from '../models/upload.model';
import { AuthService } from '../services/auth.service';
import { RecipeService } from '../services/recipe.service';
import { SelectService } from '../services/select.service';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  @Output() eventRecupTexteInput = new EventEmitter<string>();

  selectedFiles?: FileList;
  currentFileUpload?: Upload;
  currentUploadUrl?: string;
  percentage = 0;

  category: Category[];
  cost: Cost[];
  currentUsername: string;
  currentUserId: number;
  currentDate: string;

  difficulty: Difficulty[];

  haveStep: boolean = false;

  id: number;
  isCreateMode: boolean;
  isAdded: boolean = false;
  ingrData: Ingredient[];
  ingredients: Ingredient[];
  ingredientList: {};
  ingrMap: Map<string, number>;
  imagePath: any;
  isSubmitted: boolean;

  newRecipe: any;
  nbrPerson: number;

  recipeForm: FormGroup;
  recipeList: Recipe[];
  recipeToModify: Recipe;
  recSub: Subscription;

  steps: string[];
  stepsData: string[];

  user: {};
  userMap: Map<string, number>;

  placeholder: string = 'Sélectionnez votre indrédient';
  keyword = 'name';
  historyHeading: string = 'Récemment sélectionné';

  constructor(
    private selectService: SelectService,
    private recipeService: RecipeService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private uploadService: UploadService
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
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      preparationTime: new FormControl(null, [Validators.required]),
      cookingTime: new FormControl(null, [Validators.required]),
      difficulties: new FormControl('', [Validators.required]),
      ingredientsList: new FormControl({}, [Validators.required]),
      categories: new FormControl([], [Validators.required]),
      costs: new FormControl('', [Validators.required]),
      nbPerson: new FormControl(null, [Validators.required]),
      steps: new FormControl([]),
      image: new FormControl('')
    });

    if (!this.isCreateMode) {
      
      this.recipeService.getRecipe(this.id).subscribe(recipe => {
        this.recipeToModify = recipe as Recipe;

        this.ingrMap = this.ObjectToMap(this.recipeToModify.ingredientsList);
        this.steps = this.recipeToModify.steps;
        this.imagePath = this.recipeToModify.image;
        console.log(this.imagePath);
        

        this.recipeForm.setValue({
          name: this.recipeToModify.name,
          description: this.recipeToModify.description,
          preparationTime: this.recipeToModify.preparationTime,
          cookingTime: this.recipeToModify.cookingTime,
          difficulties: this.recipeToModify.difficulty.id,
          ingredientsList: this.ingredientList,
          costs: this.recipeToModify.cost.id,
          categories: this.recipeToModify.categories,
          nbPerson: this.recipeToModify.nbPerson,
          steps: this.steps,
          image: this.imagePath
        })
      });
    }
  }

  get name() {
    return this.recipeForm.get("name")
  }
  get description() {
    return this.recipeForm.get("description")
  }
  get preparationTime() {
    return this.recipeForm.get("preparationTime")
  }
  get cookingTime() {
    return this.recipeForm.get("cookingTime")
  }
  get difficulties(){
    return this.recipeForm.get('difficulties');
  }
  get categories(){
    return this.recipeForm.get('categories');
  }
  get costs(){
    return this.recipeForm.get('costs');
  }
  get nbPerson(){
    return this.recipeForm.get('nbPerson');
  }



  getUser() {
    this.currentUserId = this.authService.getUserId();
    this.currentUsername = this.authService.getUserUsername();
    this.userMap.set(this.currentUsername, this.currentUserId);
  }

  addIngredientToList(ingredient: string, amount: number, nbPerson: number) {
    console.log(ingredient);
    
    this.isAdded = true;
    this.nbrPerson = nbPerson;
    this.ingrMap.set(ingredient, amount);
  }

  deleteIngredientFromRecipe(item) {
    this.ingrMap.delete(item);
  }

  addStepToRecipe(step: string) {
    this.haveStep = true;
    this.steps.push(step);
  }

  exportImageUrl(url: string) {
    this.imagePath = url;
  }

  deleteStepFromRecipe(stepIndex: string) {
    for (let i = 0; i < this.steps.length; i++) {
      if (this.steps[i] === stepIndex) {
        this.stepsData = this.steps.splice(i, 1);
        this.stepsData = this.steps;
      }
    }
  }

  afficherTexteInputRecu(content: string) {
    console.log("contenu input : " + content)
    console.log(this.ingredients);
    this.ingredients = this.ingrData.filter(x => x.name.toLowerCase().includes(content.toLocaleLowerCase()));
    console.log(this.ingredients);
  }


  mapToObject(map: Map<string, number>, list: {}) {
    map.forEach((val, key) => {
      list[key] = val;
    })
  }

  ObjectToMap(obj) {
      const keys = Object.keys(obj);
      const map = new Map();
      for (let i = 0; i < keys.length; i++) {
        map.set(keys[i], obj[keys[i]]);
      };
      return map;
    
  }


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new Upload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
            this.imagePath = this.currentFileUpload.url;
          },
          error => {
            console.log(error);
          }
          );
        }
    }
  }

  onSubmit() {
    
    this.mapToObject(this.ingrMap, this.ingredientList);
    this.mapToObject(this.userMap, this.user);
    this.imagePath = document.querySelector('#imagePath').textContent;


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
      userNameAndId: this.user,
      image: this.imagePath
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
      userNameAndId: this.user,
      image: this.imagePath
    }

    console.log(this.newRecipe);
    console.log(this.recipeToModify);
    
    if (this.steps.length != 0 && this.ingrMap != null) {
      if (this.isCreateMode) {
        this.createRecipe();
      } else {
        this.updateRecipe();
      }
    } else {
      return false;
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
      this.recipeService.getRecipesByUserId(this.currentUserId);
    })
    this.router.navigate(['recettes-publiees']);
  }

  
  getDifficultiesList() {
    this.selectService.getAllDifficulties().subscribe(resp => {
      this.difficulty = resp;
    })
  }

  getCostsList() {
    this.selectService.getAllCosts().subscribe(resp => {
      this.cost = resp;
    })
  }
  getCategoriesList() {
    this.selectService.getAllCategories().subscribe(resp => {
      this.category = resp;
    })
  }

  getIngredientsList() {
    this.selectService.getAllIngredients().subscribe(resp => {
      this.ingredients = resp;
      this.ingrData = this.ingredients;
    })
  }
}
