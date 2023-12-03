import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-sort',
  templateUrl: './select-sort.component.html',
  styleUrls: ['./select-sort.component.css']
})
export class SelectSortComponent {
  @Output() outEnterSortCardRadio = new EventEmitter<string>()
  enterSortCard(sortInputCard:HTMLInputElement) {
    this.outEnterSortCardRadio.emit(sortInputCard.value)
  }
}

