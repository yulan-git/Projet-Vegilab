import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './_header.component.html',
  styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {
menuLinks = ['Accueil', 'Recettes', 'Planning de la semaine', 'Abonnement', 'Connexion']
  constructor() { }

  ngOnInit(): void {
  }

}
