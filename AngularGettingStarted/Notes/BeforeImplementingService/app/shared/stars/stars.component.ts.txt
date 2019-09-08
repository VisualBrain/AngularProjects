import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges {

  starWidth: number;
  @Input() rating: number ;
  // input is string to the event
  // Setting up an event
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  onClick = (): void => {
    console.log(`The rating ${this.rating} is clicked`);
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
}
