import {Component, inject, NgZone, OnDestroy} from '@angular/core';
import {fromEvent, Subject, takeUntil} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  private readonly ngZone = inject(NgZone);
  private readonly destroy$$ = new Subject<void>();
  constructor() {
    this.ngZone.runOutsideAngular(()=>{
      fromEvent(window,'resize')
        .pipe(takeUntil(this.destroy$$))
        .subscribe(()=>{
          if(window.innerWidth >= 1400){
            document.body.style.overflowY = "visible";
            this.ngZone.run(()=>{
              this.destroy$$
            })
          }
        })
    })
  }

  public ngOnDestroy(): void {
    this.destroy$$.next();
  }

}
