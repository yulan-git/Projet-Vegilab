import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cost } from '../models/cost.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  API_URL = `${environment.baseUrl}`;

  recipeSubject = new Subject<Recipe[]>();
  recipesSubject = new Subject<Recipe[]>();
  constructor(private http: HttpClient) {

  }

  getAllRecipes() {
    this.http.get<Recipe[]>(`${this.API_URL}/recipes?limit=5`).subscribe(resp => {
      this.recipesSubject.next(resp)
    })
  }

  getRecipe(recipeId: number) {
    return this.http.get<Recipe>(`${this.API_URL}/recipes/${recipeId}`).pipe(
      catchError(error => of([])))
  }
  
  getRecipesByUserId(userId: number) {
    return this.http.get<Recipe[]>(`${this.API_URL}/recipes/user/${userId}`).subscribe(resp => {
      this.recipeSubject.next(resp)
    })
  }
  

  createRecipe(recipe: Recipe) {
    return this.http.post<Recipe>(`${this.API_URL}/recipes`, recipe).pipe(
        catchError(error => of([])))
  }

  deleteRecipe(recipeId: number) {
    return this.http.delete<Recipe>(`${this.API_URL}/recipes/${recipeId}`).pipe(
        catchError(error => of([])))
  }

  updateRecipe(recipe: Recipe) {
    return this.http.put<Recipe>(`${this.API_URL}/recipes/update`, recipe).pipe(
      catchError(error => of([])))
  }

  // updateRecipe(formData: FormData) {
  //   return this.http
  //     .put<Recipe>(`${this.API_URL} / update`, formData)
  //     .pipe(
  //       catchError(error => of([])))
  // }

  addCostInRecipe(id: number, cost: Cost) {
    return this.http.post<Cost>(`${this.API_URL}/recipes/${id}/cost`, cost);
  }

  // addUserInRecipe(id: number, user: User) {
  //   return this.http.post<User>(`${this.API_URL}/recipes/${id}/user`, user);
  // }


}
