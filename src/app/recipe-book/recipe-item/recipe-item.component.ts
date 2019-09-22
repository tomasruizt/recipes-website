import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() clicked = new EventEmitter<Recipe>();

  onClicked() {
    this.clicked.emit(this.recipe);
  }
}
