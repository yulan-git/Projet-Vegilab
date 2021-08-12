import { Ingredient } from "./ingredient.model";
import { Unity } from "./unity.model";

export interface AddedIngredient {
    id?: number,
    ingredient?: Ingredient,
    amount?: number,
    unity?: Unity
}