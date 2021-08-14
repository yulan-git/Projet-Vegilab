import { Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() isHide: boolean = true;
  @Input() noVisible: boolean = true;
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() updateEvent = new EventEmitter<any>();
  recipes: Recipe[];
  id: number;
  private recSub: Subscription;
  
  constructor(private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  recipeIdToDelete(recipeId:number) {
    this.deleteEvent.emit(recipeId);
    console.log(recipeId);
    
  }
  recipeIdToUpdate(recipeId:number) {
    this.updateEvent.emit(recipeId);
    this.router.navigate(['/formulaire/', { id: recipeId }]);
  }

  ngOnDestroy() {
    if (this.recSub) {
      this.recSub.unsubscribe();
    }
}

  
}