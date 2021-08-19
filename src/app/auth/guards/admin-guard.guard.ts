import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const tokenRole = this.authService.getTokenRoles();
    console.log(tokenRole);
    let authorization: boolean;
    const admin = tokenRole.find(role => role.authority == "ADMIN");
    if (admin) {
      authorization = true;
    } else {
      authorization = false;

      this.router.navigate(['/welcome-home/']);
    }
    return authorization;
  }
}
