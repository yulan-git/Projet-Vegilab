import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss']
})
export class SearchRecipeComponent implements OnInit {
  searchFormSingle: FormGroup;
  searchFormByFilter: FormGroup;
  @Input() RecipePage = "Retrouver une recette";

  times = [
    '- de 20min', 'entre 20-40min', 'entre 40-60min', '+ de 60min'
  ]
  costs = [
    'Bon marché', 'Raisonnable', 'Coûteux'
  ]
  categories = [
    'Entrée', 'Salade', 'Plat', 'Dessert', 'Vegan', 'Veggie', 'Pizza', 'Pâtes', 'Tartes', 'Gratins', 'Recettes orientales', 'Recettes asiatiques'
  ]
  difficulties = [
    'Très facile', 'Facile', 'Moyen', 'Expert'
  ]
  constructor() {
    this.searchFormByFilter = new FormGroup({});
  }

  ngOnInit(): void {

    this.initForm();
  }

  initForm() {
    this.searchFormByFilter = new FormGroup({
      ingredients: new FormControl(''),
      times: new FormControl(''),
      difficulties: new FormControl(''),
      categories: new FormControl(''),
      costs : new FormControl('')
    });
    this.searchFormSingle = new FormGroup({
      search: new FormControl('')
    });
  }

  onSubmit() {
    
  }

}
