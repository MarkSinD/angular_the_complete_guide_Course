import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Сheese pizza', 'This is simply a test', 'https://moretestov.com/gallery/00/00/00/00/03/348/items_7_poster__1604058109.jpg'),
    new Recipe('Mushroom pizza', 'This is simply a test', 'https://e-w-e.ru/wp-content/uploads/2018/03/6-14.jpg'),
    new Recipe('Meat pizza', 'This is simply a test', 'https://e-w-e.ru/wp-content/uploads/2018/03/6-14.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
