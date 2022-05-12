import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Nasi Lemak',
      'Rich coconut rice + sweet and spicy sambal',
      'https://www.thespruceeats.com/thmb/eZF07lmCjlFfCVbzIzrsG22emMo=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/nasi-lemak-coconut-pandan-rice-3030254-step-07-ccbeb81d2b754d9c899b2edfaf386bc9.jpg',
      [new Ingredient('Onion', 2), new Ingredient('Coconut milk', 1)]
    ),
    new Recipe(
      'Chicken Biryani',
      'Spiced chicken steam cooked with saffron rice',
      'https://i.ytimg.com/vi/0SEZn3aP5JM/maxresdefault.jpg',
      [new Ingredient('Cilantro', 2), new Ingredient('Yoghurt', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
