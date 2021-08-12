import { AddedIngredient } from "./added-ingredient.model";
import { Category } from "./category.model";
import { Difficulty } from "./difficulty.model";
import { Cost } from "./cost.model";
import { User } from "./user.model";

export interface Recipe{
    
    id?: number,
    name?: string,
    description?: string,
    image?: string,
    cookingTime?: number,
    preparationTime?: number,
    datePublication?: number,
    steps?: string[],
    ingredients?: AddedIngredient[],
    categories?: Category[],
    cost?: Cost,
    difficulty?: Difficulty,
}