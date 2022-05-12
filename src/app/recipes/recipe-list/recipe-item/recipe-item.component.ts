import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Input() index: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  // onLoadRecipe() {
  //   this.router.navigate([this.index], { relativeTo: this.route });
  // }
}
