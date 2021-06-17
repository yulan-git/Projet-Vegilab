import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesRecipesComponent } from './favorites-recipes.component';

describe('FavoritesRecipesComponent', () => {
  let component: FavoritesRecipesComponent;
  let fixture: ComponentFixture<FavoritesRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
