import {Component, OnChanges, OnInit, SimpleChanges, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public getScreenWidth: any;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
   if(window.innerWidth >= 1400) {
     document.body.style.overflowY = 'visible';
   }
  }
}
