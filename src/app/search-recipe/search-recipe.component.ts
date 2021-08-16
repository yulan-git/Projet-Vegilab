import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category } from '../models/category.model';
import { Cost } from '../models/cost.model';
import { Difficulty } from '../models/difficulty.model';
import { SelectService } from '../services/select.service';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss']
})
export class SearchRecipeComponent implements OnInit, OnDestroy {
  searchFormSingle: FormGroup;
  searchFormByFilter: FormGroup;
  private recSub: Subscription;
  @Input() RecipePage = "Retrouver une recette";

  times = [
    '- de 20min', 'entre 20-40min', 'entre 40-60min', '+ de 60min'
  ]
  costs: Cost[];
  categories: Category[];
  difficulties: Difficulty[];

  constructor(private selectService :SelectService) {
    this.searchFormByFilter = new FormGroup({});
  }

  ngOnInit(): void {
    this.getCategoriesList();
    this.getDifficultiesList();
    this.getCostsList();
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

  getDifficultiesList() {
    this.recSub = this.selectService.getAllDifficulties().subscribe(resp => {
      this.difficulties = resp;
    })
  }
  getCostsList() {
    this.recSub = this.selectService.getAllCosts().subscribe(resp => {
      this.costs = resp;
    })
  }
  getCategoriesList() {
    this.recSub = this.selectService.getAllCategories().subscribe(resp => {
      this.categories = resp;
    })
  }

  onSubmit() {
    
  }

  ngOnDestroy() {
    this.recSub.unsubscribe();
  }

}
