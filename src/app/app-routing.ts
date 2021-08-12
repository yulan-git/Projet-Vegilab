import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoritesRecipesComponent } from "./favorites-recipes/favorites-recipes.component";
import { HomeComponent } from "./home/home.component";
import { InlineRecipeComponent } from "./inline-recipe/inline-recipe.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PlanningComponent } from "./planning/planning.component";
import { RecipeFormComponent } from "./recipe-form/recipe-form.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { LayoutConnexionComponent } from "./shared/layout-connexion/layout-connexion.component";
import { LayoutComponent } from "./shared/layout/layout.component";
import { RecipeCardComponent } from "./recipes/recipe-card/recipe-card.component";
import { WelcomeHomeComponent } from "./welcome-home/welcome-home.component";
import { AuthGuard } from "./guards/auth.guard";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecapitulatifComponent } from "./recipe-form/recapitulatif/recapitulatif.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'recettes', component: RecipesComponent },
        { path: 'recettes/:id', component: RecipeDetailsComponent }
    ]
    },
    {
        path: '', canActivate: [AuthGuard],component: LayoutConnexionComponent, children: [
        { path: 'welcome-home', component: WelcomeHomeComponent },
        { path: 'recettes-favorites', component: FavoritesRecipesComponent },
        { path: 'recettes-publiees', component: InlineRecipeComponent },
        { path: 'formulaire', component: RecipeFormComponent },
        { path: 'recapitulatif', component: RecapitulatifComponent },
        { path: 'planning', component: PlanningComponent }]
    },
    //{ path: 'not-found', component: NotFoundComponent},
    //{ path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}