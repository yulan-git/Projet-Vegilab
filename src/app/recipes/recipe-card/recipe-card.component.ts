import { Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, OnDestroy {
  @Input() recipe: Recipe;
  @Input() index: number;
  @Output() recipeEvent = new EventEmitter<any>();
  recipes: Recipe[];
  id: number;
  private recSub: Subscription;
  
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  recipeIdToDelete(recipeId:number) {
    this.recipeEvent.emit(recipeId);
  }

  ngOnDestroy() {
    if (this.recSub) {
      this.recSub.unsubscribe();
    }
}

  
}