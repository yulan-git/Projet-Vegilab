import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { Cost } from '../models/cost.model';
import { Difficulty } from '../models/difficulty.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  API_URL = "http://localhost:8082/api";

  //recipeSubject = new Subject<Recipe[]>();
  constructor(private http: HttpClient) {

  }

  getAllDifficulties() {
    return this.http.get<Difficulty[]>(`${this.API_URL}/select/difficulties`).pipe(
      catchError(error => of([])))
  }
  getAllCosts() {
    return this.http.get<Cost[]>(`${this.API_URL}/select/costs`).pipe(
      catchError(error => of([])))
  }

  getAllCategories() {
    return this.http.get<Category[]>(`${this.API_URL}/select/categories`).pipe(
      catchError(error=>of([]))
    )
  }

  getAllIngredients() {
    return this.http.get<Ingredient[]>(`${this.API_URL}/select/ingredients`).pipe(
      catchError(error => of([]))
    )
  }
}
