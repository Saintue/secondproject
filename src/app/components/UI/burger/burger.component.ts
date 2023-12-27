import {Component} from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent{

  closeMenu ():void {
    const burgerIsChecked: HTMLInputElement = <HTMLInputElement>document.getElementById("burger-checkbox");
    if (burgerIsChecked.checked) {
      burgerIsChecked.checked = false;
      document.body.style.overflowY = 'visible';
    }

  }

  overflowChangeState():void {
    const burgerIsChecked: HTMLInputElement = <HTMLInputElement>document.getElementById("burger-checkbox");
    if(burgerIsChecked.checked){
      document.body.style.overflowY = 'hidden';
    }
    if(!burgerIsChecked.checked){
      document.body.style.overflowY = 'visible';
    }
  }
}

