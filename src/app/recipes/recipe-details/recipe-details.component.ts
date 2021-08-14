import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;
  id: number;
  ingredientsList: [];
  createdBy: string;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id);
        this.recipeService.getRecipe(this.id).subscribe(resp => {
          this.recipe = resp;
          this.createdBy = String(Object.keys(this.recipe.user));
          console.log(this.createdBy);
        })
      }
    )
  }
}
