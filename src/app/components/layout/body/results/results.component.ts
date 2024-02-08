import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
 tabs =[
    {tabNumber: 1, isActive: true, },
    {tabNumber: 2, isActive: false, },
    {tabNumber: 3, isActive: false, },
  ]

  tabCurrentActiveNumber:number = 1;

  tabShow (number:number):void {
   this.tabs[number - 1].isActive = true;
    this.tabs.forEach(tab =>{
      tab.isActive = (tab.tabNumber === number) ? true : false;
    })
}

tabSet(number:number){
   return this.tabCurrentActiveNumber = number;
}
tabGet(){
   return this.tabCurrentActiveNumber;
}
}
