import { Component } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {
  a = document.getElementById("burger-checkbox");

  closeMenu = () => {
    let a: HTMLInputElement = <HTMLInputElement>document.getElementById("burger-checkbox");
    if (a.checked) {
      a.checked = false;
    }
  }
}

