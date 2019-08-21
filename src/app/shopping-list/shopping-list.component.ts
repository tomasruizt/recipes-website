import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent {
  private ingredients: Ingredient[] = [
    new Ingredient("Carrot", 3),
    new Ingredient("Potato", 5),
  ]
}
