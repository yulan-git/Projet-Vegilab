import { Ingredient } from "./ingredient.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
    
export class Recipe{
    
    constructor(
        public id_recette: number,
        public name: string,
        public imagePath: string,
        public description: string,
        public difficulty: string,
        public category: string[],
        public cost: string,
        public cookingTime: number,
        public preparationTime: number,
        public date_publication: string,
        public ingredients: Ingredient[],
        public step: string[]) {
        
    }
}