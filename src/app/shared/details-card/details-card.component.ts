import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent {
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
  @Input()
  ingredients!: [];
  @Input()
  rank!: number;

  recipeDetails: any;
}
