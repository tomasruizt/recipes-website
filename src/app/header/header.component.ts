import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  collapsed = true;
  @Output() private recipesClicked = new EventEmitter();
  @Output() private shoppingListClicked = new EventEmitter();

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  onRecipesClicked() {
    this.recipesClicked.emit();
  }

  onShoppingListClicked() {
    this.shoppingListClicked.emit();
  }
}
