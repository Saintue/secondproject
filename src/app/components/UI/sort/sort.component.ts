import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  @Output() outEnterSortCard = new EventEmitter<string>()
  enterSortCard(sortInputCard:HTMLInputElement) {

    this.outEnterSortCard.emit(sortInputCard.value)
  }
}
