import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }

  @Input() rating: number = 2;
  cropWidth: number = 0;

 @Output() ratingClickEvent: EventEmitter<string> = new EventEmitter<string>();


  onClick() {
    this.ratingClickEvent.emit(`select product rating is: ${this.rating}`);
    //alert(`select product rating is: ${this.rating}`)
  }
}
