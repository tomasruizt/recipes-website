import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipe-book",
  templateUrl: "./recipe-book.component.html",
})
export class RecipeBookComponent {
  focusedRecipe: Recipe;

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "Test description", "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg"),
    new Recipe("Second Test Recipe", "Test description", "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg"),
  ];
}
