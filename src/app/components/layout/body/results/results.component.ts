import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
 tabs =[
    {number: 1, state: true, },
    {number: 2, state: false, },
    {number: 3, state: false, },
  ]

  tabNumber:number = 1;

  TabShow = (number:number) => {
   this.tabs[number - 1].state = true;
   if(number == 1) {
     this.tabs[1].state = false;
     this.tabs[2].state = false;
   }
    if(number == 2) {
      this.tabs[0].state = false;
      this.tabs[2].state = false;
    }
    if(number == 3) {
      this.tabs[0].state = false;
      this.tabs[1].state = false;
    }
}

tabSent(number:number){
   return this.tabNumber = number;
}
tabGet(){
   return this.tabNumber;
}
}
