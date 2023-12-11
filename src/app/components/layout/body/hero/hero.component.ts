import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  bruh(a:number):number {
    return a;
}
  sum = (age:number | string):number | string => {
    return age;
  }
}
