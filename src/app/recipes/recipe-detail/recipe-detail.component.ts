import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.selectedRecipe = this.recipeService.getRecipe(this.id);        this isn't being subscribed!
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.id);
    });
  }

  onToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.selectedRecipe.ingredients
    );
    // for (const ingredient of this.selectedRecipe.ingredients) {
    //   this.shoppingListService.addIngredient(ingredient);
    // }
  }
}
