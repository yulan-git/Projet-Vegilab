import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  dev = false;
  URL_DEV = 'http://locahost:3000/api';
  URL_TEST = `${environment.baseUrl}`;
  API_URL: string;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,
    private router: Router
  ) {
    this.API_URL = this.dev ? this.URL_DEV : this.URL_TEST;
  }

  signup(user:User): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/auth/signup`, user)
  }

  login(user:User): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/auth/login`, user)
      .pipe(
        map(
          (resp: any) => {
            console.log(resp);
            localStorage.setItem('TOKEN_APPLI', resp.accessToken);
            localStorage.setItem('ROLE', resp.roles)
            console.log('Token Save', resp.accessToken);
            return resp;
          }
        )
      );
  }

  getUserId(): number {
    const token: any = this.getToken();
    const decode = this.jwtHelper.decodeToken(token);
    return decode.id;
  }

  getUserUsername(): string{
    const token: any = this.getToken();
    const decode = this.jwtHelper.decodeToken(token);
    return decode.sub;
  }

  getToken() {
    return localStorage.getItem('TOKEN_APPLI');
  }

  getJwtToken() {
    const token: any = this.getToken();
    const decode = this.jwtHelper.decodeToken(token);
    if (decode != null && decode.id != null && decode.sub != null) {
      if (!this.jwtHelper.isTokenExpired) {
        return { ...decode, token };
      } else {
        localStorage.removeItem('TOKEN_APPLI')
      }
    }
  }

  getTokenRoles(){
    const token: any = this.getToken();
    const decode = this.jwtHelper.decodeToken(token);
    const tokenRoles = decode.rol;
    return tokenRoles;
    // tokenRoles.forEach( role => {
    //   console.log(role.authority);
    //   return role.authority;
    // });
  }


  logout() {
    localStorage.removeItem('TOKEN_APPLI');
    localStorage.removeItem('USER_ID');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Boolean {
    const token: any = this.getToken();
    const decode = this.jwtHelper.decodeToken(token);
    return decode != null;
  }

  isAuthenticatedAsAdmin() {
      const roles = localStorage.getItem('ROLE');
    if (roles !=null && roles.includes("ADMIN")) {
        return true;
      } 
  }


}
