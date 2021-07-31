import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  recipeForm: FormGroup;
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
  unities = [
    'gramme(s)', 'litre(s)', 'centilitre(s)', 'millilitre(s)', 'kilo(s)', 'cuillère(s) à soupe', 'cuillère(s) à café', 'pincée(s)'
  ]
  constructor() {
    this.recipeForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.recipeForm = new FormGroup({
      title: new FormControl('Buddha bowl'),
      description: new FormControl("Un buddha bowl délicieux et complet pour réveiller vos sens, rafraîchir votre corps et faire de l'été la meilleure des saisons!"),
      //ingredients: new FormControl(''),
      times: new FormControl('- de 20min'),
      difficulties: new FormControl('Facile'),
      categories: new FormControl('plat'),
      costs: new FormControl('Raisonnable'),
      //personNbr: new FormControl(''),
      //addIngredient: new FormControl(''),
      //unities: new FormControl(''),
      //quantity: new FormControl(''),
      //addStep: new FormControl(''),
      
    });
    
  }

  onSubmit() {
    
    console.log(this.recipeForm.value);
  }

}
