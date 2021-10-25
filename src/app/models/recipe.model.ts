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
    datePublication?: any,
    nbPerson: number,
    steps?: string[],
    ingredientsList?: { [name: string]: number },
    categories?: String[],
    cost?: Cost,
    difficulty?: Difficulty,
    userNameAndId?: { [username: string]: number }
}