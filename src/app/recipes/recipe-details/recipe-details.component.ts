import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { User } from 'src/app/models/user.model';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;
  private recSub: Subscription;
  user: User = {
    id_user: 1,
    username: "floflo",
    email: "floflo@mail.com",
    password: "floflo56"
  }

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.recipe);
    
  // this.recipe.date_publication = formatDate("d MMMM y", )

    // const id = this.route.snapshot.params['id'];
    // console.log(id);
    
    // console.log(this.route);
    
    // //const dataRecipe = this.recipeService.getRecipes();
    // console.log(dataRecipe);

    // this.recipe = dataRecipe.find(r => r.id_recette === id);
    // const idRecipe = this.route.snapshot.params.id;
    // this.recipeService.getRecipe(idRecipe).
    // console.log(this.recipe)

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id);
        //this.recipe = this.recipeService.getRecipe(this.id);
        console.log(this.recipe);
        
      }
    )
  }


}
