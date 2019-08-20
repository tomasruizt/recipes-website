import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  collapsed = true;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
