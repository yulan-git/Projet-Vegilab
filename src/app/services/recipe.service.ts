import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // recipes: Recipe[] = [
  //   new Recipe(
  //     0,
  //     'Salade printanière',
  //     '../../assets/img/plat.jpg',
  //     "Un buddha bowl délicieux et complet pour réveiller vos sens, rafraîchir votre corps et faire de l'été la meilleure des saisons!",
  //     'facile',
  //     [
  //       'recettes vegan', 'salades'
  //     ],
  //     'bon marché',
  //     20,
  //     15,
  //     "2020-07-18",
  //     [
  //       new Ingredient('avocat', 1, ''),
  //       new Ingredient('tomates cerises', 8, ''),
  //       new Ingredient('poivron jaune', 1, ''),
  //       new Ingredient('patate douce', 1, ''),
  //       new Ingredient('Pousse d\'Alfala', null, ''),
  //       new Ingredient('radis roses', 8, ''),
  //       new Ingredient('huile d\'olive', null, ''),
  //       new Ingredient('sel', null, ''),
  //       new Ingredient('poivre', null, ''),
  //     ],
  //     [
  //       'Laver la tomates, la salade, les radis roses, le poivron à l’eau claire.',
  //       'Faire cuire la patate douce dans une casserole d’eau bouillante pendant 15 minutes, laisser refroidir et la découper en cubes.',
  //       'Découper le poivrons jaunes comme vous préférez.',
  //       'Répartir tous les ingrédients dans un grand bol selon votre convenance.',
  //       'Saler et poivrer.',
  //       'Asaisonner avec le jus de citron et l’huile d’olive.'
  //     ]
  //   ),
  //   new Recipe(
  //     1,
  //     'Buddha Bowl',
  //     '../../assets/img/plat.jpg',
  //     "Un buddha bowl délicieux et complet pour réveiller vos sens, rafraîchir votre corps et faire de l'été la meilleure des saisons!",
  //     'facile',
  //     [
  //       'recettes vegan', 'salades'
  //     ],
  //     'bon marché',
  //     20,
  //     15,
  //     "17-07-2020",
  //     [
  //       new Ingredient('avocat', 1, ''),
  //       new Ingredient('tomates cerises', 8, ''),
  //       new Ingredient('poivron jaune', 1, ''),
  //       new Ingredient('patate douce', 1, ''),
  //       new Ingredient('Pousse d\'Alfala', null, ''),
  //       new Ingredient('radis roses', 8, ''),
  //       new Ingredient('huile d\'olive', null, ''),
  //       new Ingredient('sel', null, ''),
  //       new Ingredient('poivre', null, ''),
  //     ],
  //     [
  //       'Laver la tomates, la salade, les radis roses, le poivron à l’eau claire.',
  //       'Faire cuire la patate douce dans une casserole d’eau bouillante pendant 15 minutes, laisser refroidir et la découper en cubes.',
  //       'Découper le poivrons jaunes comme vous préférez.',
  //       'Répartir tous les ingrédients dans un grand bol selon votre convenance.',
  //       'Saler et poivrer.',
  //       'Asaisonner avec le jus de citron et l’huile d’olive.'
  //     ]
  //   )
  // ];
  API_URL = "http://localhost:8082/api/recipes/";

  //recipeSubject = new Subject<Recipe[]>();
  constructor(private http: HttpClient) {
    
  }

  // getRecipes(){
  //   return this.recipes.slice();
  // }

  // getRecipe(id: number) {
  //   return this.recipes[id];
  // }

  getAllRecipes() {
    return this.http.get<any[]>(`${ this.API_URL }`).pipe(
      catchError(error => of([])))
  }

  getRecipe(recipeId: number) {
    return this.http.get<Recipe>(`${this.API_URL} / ${ recipeId }`).pipe(
      catchError(error => of([])))
  }

  createRecipe(formData: FormData) {
    return this.http
      .post<Recipe>(`${ this.API_URL } / create`, formData)
      .pipe(
        catchError(error => of([])))
  }

  deleteRecipe(recipeId: number) {
    return this.http
      .delete<Recipe>(`${ this.API_URL } / delete /${recipeId}`)
        .pipe(
          catchError(error => of([])))
  }

  updateRecipe(formData: FormData) {
    return this.http
      .put<Recipe>(`${ this.API_URL } / update`, formData)
      .pipe(
        catchError(error => of([])))
  }
}
