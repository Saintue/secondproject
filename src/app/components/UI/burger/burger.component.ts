import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements  OnDestroy{

  closeMenu = () => {
    let a: HTMLInputElement = <HTMLInputElement>document.getElementById("burger-checkbox");
    if (a.checked) {
      a.checked = false;
      document.body.style.overflowY = 'visible';
    }

  }

  hideOverflow() {
    let a: HTMLInputElement = <HTMLInputElement>document.getElementById("burger-checkbox");
    if(a.checked){
      document.body.style.overflowY = 'hidden';
    }
    if(!a.checked){
      document.body.style.overflowY = 'visible';
    }
  }

    ngOnDestroy() {
        document.body.style.overflowY = 'visible';
    }
}

