import { Component } from '@angular/core';

enum Page {
  Recipes,
  ShoppingList,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private currentPage = Page.Recipes;

  setPageToRecipes() {
    this.currentPage = Page.Recipes;
  }

  setPageToShoppingList() {
    this.currentPage = Page.ShoppingList;
  }

  doShowRecipesPage(): boolean {
    return this.currentPage == Page.Recipes;
  }

  doShowShoppingListPage(): boolean {
    return this.currentPage == Page.ShoppingList;
  }
}
