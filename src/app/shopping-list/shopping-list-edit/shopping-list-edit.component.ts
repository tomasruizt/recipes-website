import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
})
export class ShoppingListEditComponent {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild("nameInput", {static: false}) nameInputRef: ElementRef;
  @ViewChild("amountInput", {static: false}) amountInputRef: ElementRef;

  createNewIngredient() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = parseInt(this.amountInputRef.nativeElement.value);
    this.newIngredient.emit(new Ingredient(name, amount,));
  }
}
