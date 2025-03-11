import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  imgSrc!: string;
  @Input()
  title!: string;
  @Input()
  desc!: string;
  @Input()
  btnText!: string;
  @Input()
  id!: string;

  @Output() btnEvent = new EventEmitter()


  fireEvent() {
    this.btnEvent.emit()
  }

}
