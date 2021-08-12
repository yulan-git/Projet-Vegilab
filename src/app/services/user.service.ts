import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Recipe } from '../models/recipe.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject = new Subject<User>();
  API_URL = `${environment.baseUrl}`;

  constructor(private http: HttpClient, private authService: AuthService) { }
  
  getAllUsers() {
    return this.http.get<User[]>(`${this.API_URL}/users`).pipe(
      catchError(error => of([]))
    )
  }

  getUser(id: number) {
    this.http.get<User>(`${this.API_URL}/users/${id}`).subscribe(resp => {
      this.userSubject.next(resp);
    }
    )
  }

  getUserById(id: number){
    return this.http.get<User>(`${this.API_URL}/users/${id}`).pipe(
      catchError(error => of([]))
    )
  }

  addUserInRecipe(id: number, recipe: Recipe) {
    return this.http.post<User>(`${this.API_URL}/users/${id}/recipe`, recipe);
  }

  
}
