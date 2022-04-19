import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Nasi Lemak',
      'Rich coconut rice + sweet and spicy sambal',
      'https://www.thespruceeats.com/thmb/eZF07lmCjlFfCVbzIzrsG22emMo=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/nasi-lemak-coconut-pandan-rice-3030254-step-07-ccbeb81d2b754d9c899b2edfaf386bc9.jpg'
    ),
    new Recipe(
      'Chicken Biryani',
      'Spiced chicken steam cooked with saffron rice',
      'https://i.ytimg.com/vi/0SEZn3aP5JM/maxresdefault.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
