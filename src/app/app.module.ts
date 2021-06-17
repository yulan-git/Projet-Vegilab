import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipesComponent } from './recipes/recipes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewlettersComponent } from './shared/newletters/newletters.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { FavoritesRecipesComponent } from './favorites-recipes/favorites-recipes.component';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';
import { LayoutConnexionComponent } from './shared/layout-connexion/layout-connexion.component';
import { PlanningComponent } from './planning/planning.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { InlineRecipeComponent } from './inline-recipe/inline-recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DropdownDirective,
    RecipesComponent,
    NewlettersComponent,
    LayoutComponent,
    LoginComponent,
    SignupComponent,
    RecipeCardComponent,
    FavoritesRecipesComponent,
    WelcomeHomeComponent,
    LayoutConnexionComponent,
    PlanningComponent,
    RecipeFormComponent,
    InlineRecipeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
