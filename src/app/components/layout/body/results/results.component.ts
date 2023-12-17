import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
 tabs =[
    {number: 1, state: true, },
    {number: 2, state: true, },
    {number: 3, state: true, },
  ]
  TabShow = (number:number) => {
   this.tabs[number - 1].state =  !this.tabs[number - 1].state;
}
}
