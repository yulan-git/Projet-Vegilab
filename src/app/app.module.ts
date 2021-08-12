import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipesComponent } from './recipes/recipes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewlettersComponent } from './shared/newletters/newletters.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { FavoritesRecipesComponent } from './favorites-recipes/favorites-recipes.component';
import { LayoutConnexionComponent } from './shared/layout-connexion/layout-connexion.component';
import { PlanningComponent } from './planning/planning.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { InlineRecipeComponent } from './inline-recipe/inline-recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeService } from './services/recipe.service';
import { StorageComponent } from './storage/storage.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AddToPlanningFormComponent } from './recipes/add-to-planning-form/add-to-planning-form.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { RecapitulatifComponent } from './recipe-form/recapitulatif/recapitulatif.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import { DelelePopupComponent } from './recipes/delele-popup/delele-popup.component';
registerLocaleData(localeFr, 'fr');
//import { AngularFireModule } from "@angular/fire";
// import { environment } from "../environments/environment";
// import {
//   AngularFireStorageModule,
//   AngularFireStorageReference,
//   AngularFireUploadTask,
// } from "@angular/fire/storage";

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
    LayoutConnexionComponent,
    PlanningComponent,
    RecipeFormComponent,
    InlineRecipeComponent,
    NotFoundComponent,
    WelcomeHomeComponent,
    RecipeDetailsComponent,
    StorageComponent,
    AddToPlanningFormComponent,
    SearchRecipeComponent,
    RecapitulatifComponent,
    //DelelePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    //AngularFireStorageModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [
    RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
