import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
    new Recipe ('Test Recipe', 'Test Desc2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg'),
    new Recipe ('Test Recipe2', 'Test Desc2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg')
  ];

  getRecipes() {
      return this.recipes.slice();
  }
}