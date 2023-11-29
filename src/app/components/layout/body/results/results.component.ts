import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  toggler1:boolean = false;
  toggler2:boolean = false;
  toggler3:boolean = false;

  toggle1(){
   this.toggler1 = !this.toggler1;
  }
  toggle2(){
    this.toggler2 = !this.toggler2;
  }
  toggle3(){
    this.toggler3 = !this.toggler3;
  }
}
