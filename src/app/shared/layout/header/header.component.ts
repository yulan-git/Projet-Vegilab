import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './_header.component.html',
  styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {
menuLinks = ['Accueil', 'Recettes', 'Planning de la semaine', 'Connexion']
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Boolean {
    return this.authService.isAuthenticated();
  }

  isAuthenticatedAsAdmin() {
    //document.querySelector<HTMLElement>('.gestion').style.display = 'block';
    return this.authService.isAuthenticatedAsAdmin();
  }

}
