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
import { AuthGuard } from "./auth/guards/auth.guard";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminGuardGuard } from "./auth/guards/admin-guard.guard";
import { UsersListComponent } from "./dashboard/users-list/users-list.component";
import { UsersRecipesListComponent } from "./dashboard/users-recipes-list/users-recipes-list.component";
import { MentionsLegalesComponent } from "./shared/mentions-legales/mentions-legales.component";
import { CgvComponent } from "./shared/cgv/cgv.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    { path: 'cgv', component: CgvComponent },
    {
        path: '', component: LayoutComponent, children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'recettes', component: RecipesComponent },
            { path: 'recettes/:id', component: RecipeDetailsComponent }
        ]
    },
    {
        path: '', canActivate: [AuthGuard], component: LayoutConnexionComponent, children: [
            { path: 'dashboard', canActivate: [AdminGuardGuard], component: DashboardComponent },
            { path: 'users-list', component: UsersListComponent },
            { path: 'users-recipes-list', component: UsersRecipesListComponent },
            { path: 'welcome-home', component: WelcomeHomeComponent },
            { path: 'recettes-favorites', component: FavoritesRecipesComponent },
            { path: 'recettes-publiees', component: InlineRecipeComponent },
            { path: 'formulaire', component: RecipeFormComponent },
            { path: 'formulaire/:id', component: RecipeFormComponent },
            { path: 'planning', component: PlanningComponent }]
    },
    //{ path: 'not-found', component: NotFoundComponent},
    //{ path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})

export class AppRoutingModule {

}