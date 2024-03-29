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
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AddToPlanningFormComponent } from './recipes/add-to-planning-form/add-to-planning-form.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environmentFirebase } from 'src/environments/environnement-firebase';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';
import { UsersRecipesListComponent } from './dashboard/users-recipes-list/users-recipes-list.component';
import { MentionsLegalesComponent } from './shared/mentions-legales/mentions-legales.component';
import { CgvComponent } from './shared/cgv/cgv.component';
registerLocaleData(localeFr, 'fr');


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
    AddToPlanningFormComponent,
    SearchRecipeComponent,
    DashboardComponent,
    UsersListComponent,
    UsersRecipesListComponent,
    MentionsLegalesComponent,
    CgvComponent,
    //DelelePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environmentFirebase.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    AutocompleteLibModule

  ],
  providers: [
    RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
