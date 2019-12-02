import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes:Recipe[] = [];
    // private recipes:Recipe[] = [
    // new Recipe (
    //     'Egg Curry', 
    //     'Try Egg slice masala', 
    //     'https://upload.wikimedia.org/wikipedia/commons/1/19/Egg_curry.jpg',
    //     [
    //         new Ingredient('Egg', 4),
    //         new Ingredient('Onion', 5)
    //     ]),
    // new Recipe (
    //     'Chhole Puri', 
    //     'Chhole Puri - Indian Breakfast', 
    //     'https://live.staticflickr.com/2801/4437915204_1469299960_z.jpg',
    //     [
    //         new Ingredient('Chickpeas', 20),
    //         new Ingredient('Potatoes', 10)
    //     ])
    // ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
      return this.recipes.slice();
  }
  getRecipe(index: number) {
      return this.recipes[index];
  }

  addIngredientsToShoppingList (ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index:number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}